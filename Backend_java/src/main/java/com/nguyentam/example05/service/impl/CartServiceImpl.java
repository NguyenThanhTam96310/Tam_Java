package com.nguyentam.example05.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyentam.example05.entity.Cart;
import com.nguyentam.example05.entity.CartItem;
import com.nguyentam.example05.entity.Order;
import com.nguyentam.example05.entity.OrderItem;
import com.nguyentam.example05.entity.Product;
import com.nguyentam.example05.exceptions.APIException;
import com.nguyentam.example05.exceptions.ResourceNotFoundException;
import com.nguyentam.example05.payloads.CartDTO;
import com.nguyentam.example05.payloads.CartItemDTO;
import com.nguyentam.example05.payloads.OrderDTO;
import com.nguyentam.example05.payloads.ProductDTO;
import com.nguyentam.example05.repository.CartItemRepo;
import com.nguyentam.example05.repository.CartRepo;
import com.nguyentam.example05.repository.ProductRepo;
import com.nguyentam.example05.service.CartService;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class CartServiceImpl implements CartService {
  @Autowired
  private CartRepo cartRepo;
  @Autowired
  private ProductRepo productRepo;
  @Autowired
  private CartItemRepo cartItemRepo;
  @Autowired
  private ModelMapper modelMapper;

  @Override
  public CartDTO addProductToCart(Long cartId, Long productId, Integer quantity) {
    Cart cart = cartRepo.findById(cartId)
        .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));

    Product product = productRepo.findById(productId)
        .orElseThrow(() -> new ResourceNotFoundException("Product", "productId", productId));

    CartItem existingCartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId, productId);
    if (existingCartItem != null) {
      throw new APIException("Product " + product.getProductName() + " already exists in the cart");
    }
    if (product.getQuantity() == 0) {
      throw new APIException(product.getProductName() + " is not available");
    }
    if (product.getQuantity() < quantity) {
      throw new APIException(
          "Please, make an order of the " + product.getProductName() + " less than or equal to the quantity "
              + product.getQuantity() + ".");
    }

    CartItem newCartItem = new CartItem();
    newCartItem.setProduct(product);
    newCartItem.setCart(cart);
    newCartItem.setQuantity(quantity);
    newCartItem.setDiscount(product.getDiscount());
    newCartItem.setProductPrice(product.getSpecialPrice());
    cartItemRepo.save(newCartItem);

    product.setQuantity(product.getQuantity() - quantity);
    cart.setTotalPrice(cart.getTotalPrice() + (product.getSpecialPrice() * quantity));

    CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);
    List<ProductDTO> productDTOs = cart.getCartItems().stream()
        .map(p -> modelMapper.map(p.getProduct(),
            ProductDTO.class))
        .collect(Collectors.toList());
    cartDTO.setProducts(productDTOs);
    List<CartItemDTO> cartItems = cart.getCartItems().stream().map(p -> {
      CartItemDTO cartItemDTO = new CartItemDTO();
      ProductDTO productDTO = modelMapper.map(p.getProduct(), ProductDTO.class);
      cartItemDTO.setProduct(productDTO);
      cartItemDTO.setQuantity(p.getQuantity());
      cartItemDTO.setDiscount(p.getDiscount());
      cartItemDTO.setProductPrice(p.getProductPrice());
      return cartItemDTO;
    }).collect(Collectors.toList());

    cartDTO.setCartItemDTOS(cartItems);
    return cartDTO;
  }

  @Override
  public List<CartDTO> getAllCarts() {
    List<Cart> carts = cartRepo.findAll();
    if (carts.isEmpty()) {
      throw new APIException("No cart exists");
    }

    List<CartDTO> cartDTOs = carts.stream().map(cart -> {
      CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);
      List<CartItemDTO> cartItems = cart.getCartItems().stream().map(cartItem -> {
        CartItemDTO cartItemDTO = new CartItemDTO();
        List<ProductDTO> productDTOs = cart.getCartItems().stream()
            .map(p -> modelMapper.map(p.getProduct(),
                ProductDTO.class))
            .collect(Collectors.toList());
        cartDTO.setProducts(productDTOs);
        ProductDTO productDTO = modelMapper.map(cartItem.getProduct(), ProductDTO.class);
        cartItemDTO.setProduct(productDTO);
        cartItemDTO.setQuantity(cartItem.getQuantity());
        cartItemDTO.setDiscount(cartItem.getDiscount());
        cartItemDTO.setProductPrice(cartItem.getProductPrice());

        return cartItemDTO;
      }).collect(Collectors.toList());
      cartDTO.setCartItemDTOS(cartItems);
      return cartDTO;
    }).collect(Collectors.toList());

    return cartDTOs;
  }

  @Override
  public CartDTO getCart(String emailId, Long cartId) {
    Cart cart = cartRepo.findCartByEmailAndCartId(emailId, cartId);
    if (cart == null) {
      throw new ResourceNotFoundException("Cart", "cartId", cartId);
    }
    CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);
    List<ProductDTO> productDTOs = cart.getCartItems().stream()
        .map(p -> modelMapper.map(p.getProduct(),
            ProductDTO.class))
        .collect(Collectors.toList());
    cartDTO.setProducts(productDTOs);
    List<CartItemDTO> cartItemDTOs = cart.getCartItems().stream().map(cartItem -> {
      CartItemDTO cartItemDTO = new CartItemDTO();
      ProductDTO productDTO = modelMapper.map(cartItem.getProduct(), ProductDTO.class);
      cartItemDTO.setProduct(productDTO);
      cartItemDTO.setQuantity(cartItem.getQuantity());
      cartItemDTO.setDiscount(cartItem.getDiscount());
      cartItemDTO.setProductPrice(cartItem.getProductPrice());

      return cartItemDTO;
    }).collect(Collectors.toList());
    cartDTO.setCartItemDTOS(cartItemDTOs);

    return cartDTO;
  }

  @Override
  public void updateProductInCarts(Long cartId, Long productId) {
    Cart cart = cartRepo.findById(cartId)
        .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));
    Product product = productRepo.findById(productId)
        .orElseThrow(() -> new ResourceNotFoundException("Product", "productId", productId));
    CartItem cartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId, productId);
    if (cartItem == null) {
      throw new APIException("Product " + product.getProductName() + " is not available in the cart!!!");
    }
    double cartPrice = cart.getTotalPrice() - (cartItem.getProductPrice() * cartItem.getQuantity());
    cartItem.setProductPrice(product.getSpecialPrice());
    cart.setTotalPrice(cartPrice + (cartItem.getProductPrice() * cartItem.getQuantity()));
    cartItemRepo.save(cartItem);
  }

  @Override
  public CartDTO updateProductQuantityInCart(Long cartId, Long productId, Integer quantity) {
    Cart cart = cartRepo.findById(cartId)
        .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));
    Product product = productRepo.findById(productId)
        .orElseThrow(() -> new ResourceNotFoundException("Product", "productId", productId));
    if (product.getQuantity() == 0) {
      throw new APIException(product.getProductName() + " is not available");
    }
    if (product.getQuantity() < quantity) {
      throw new APIException("Please, make an order of " + product.getProductName() +
          " with a quantity less than or equal to " + product.getQuantity() + ".");
    }
    CartItem cartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId, productId);
    if (cartItem == null) {
      throw new APIException("Product " + product.getProductName() + " is not available in the cart!!!");
    }
    double cartPrice = cart.getTotalPrice() - (cartItem.getProductPrice() * cartItem.getQuantity());
    product.setQuantity(product.getQuantity() + cartItem.getQuantity() - quantity);
    cartItem.setProductPrice(product.getSpecialPrice());
    cartItem.setQuantity(quantity);
    cartItem.setDiscount(product.getDiscount());
    cart.setTotalPrice(cartPrice + (cartItem.getProductPrice() * quantity));
    cartItemRepo.save(cartItem);
    CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);
    return cartDTO;
  }

  @Override
  public String deleteProductFromCart(Long cartId, Long productId) {
    Cart cart = cartRepo.findById(cartId)
        .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));

    CartItem cartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId, productId);
    if (cartItem == null) {
      throw new ResourceNotFoundException("Product", "productId", productId);
    }
    cart.setTotalPrice(cart.getTotalPrice() - (cartItem.getProductPrice() * cartItem.getQuantity()));
    Product product = cartItem.getProduct();
    product.setQuantity(product.getQuantity() + cartItem.getQuantity());
    cartItemRepo.deleteCartItemByProductIdAndCartId(cartId, productId);

    return "Product " + cartItem.getProduct().getProductName() + " has been removed from the cart!!!";
  }
}
// ----------------------------------------------------------------------------------------------------------
// package com.nguyentam.example05.service.impl;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.modelmapper.ModelMapper;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.nguyentam.example05.entity.Cart;
// import com.nguyentam.example05.entity.CartItem;
// import com.nguyentam.example05.entity.Product;
// import com.nguyentam.example05.exceptions.APIException;
// import com.nguyentam.example05.exceptions.ResourceNotFoundException;
// import com.nguyentam.example05.payloads.CartDTO;
// import com.nguyentam.example05.payloads.CartItemDTO;
// import com.nguyentam.example05.payloads.ProductDTO;
// import com.nguyentam.example05.repository.CartItemRepo;
// import com.nguyentam.example05.repository.CartRepo;
// import com.nguyentam.example05.repository.ProductRepo;
// import com.nguyentam.example05.service.CartService;

// import jakarta.transaction.Transactional;

// @Transactional
// @Service
// public class CartServiceImpl implements CartService {

// @Autowired
// private CartRepo cartRepo;

// @Autowired
// private ProductRepo productRepo;

// @Autowired
// private CartItemRepo cartItemRepo;

// @Autowired
// private ModelMapper modelMapper;

// @Override
// public CartDTO addProductToCart(Long cartId, Long productId, Integer
// quantity) {
// Cart cart = cartRepo.findById(cartId)
// .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));

// Product product = productRepo.findById(productId)
// .orElseThrow(() -> new ResourceNotFoundException("Product", "productId",
// productId));

// CartItem existingCartItem =
// cartItemRepo.findCartItemByProductIdAndCartId(cartId, productId);
// if (existingCartItem != null) {
// throw new APIException("Product " + product.getProductName() + " already
// exists in the cart");
// }
// if (product.getQuantity() == 0) {
// throw new APIException(product.getProductName() + " is not available");
// }
// if (product.getQuantity() < quantity) {
// throw new APIException(
// "Please order " + product.getProductName() + " less than or equal to the
// available quantity.");
// }

// CartItem newCartItem = new CartItem();
// newCartItem.setProduct(product);
// newCartItem.setCart(cart);
// newCartItem.setQuantity(quantity);
// newCartItem.setDiscount(product.getDiscount());
// newCartItem.setProductPrice(product.getSpecialPrice());
// cartItemRepo.save(newCartItem);

// product.setQuantity(product.getQuantity() - quantity);
// cart.setTotalPrice(cart.getTotalPrice() + (product.getSpecialPrice() *
// quantity));

// // Chuyển đổi giỏ hàng sang CartDTO
// return mapCartToDTO(cart);
// }

// @Override
// public List<CartDTO> getAllCarts() {
// List<Cart> carts = cartRepo.findAll();
// if (carts.isEmpty()) {
// throw new APIException("No cart exists");
// }

// return carts.stream()
// .map(this::mapCartToDTO)
// .collect(Collectors.toList());
// }

// @Override
// public CartDTO getCart(String emailId, Long cartId) {
// Cart cart = cartRepo.findCartByEmailAndCartId(emailId, cartId);
// if (cart == null) {
// throw new ResourceNotFoundException("Cart", "cartId", cartId);
// }

// return mapCartToDTO(cart);
// }

// @Override
// public void updateProductInCarts(Long cartId, Long productId) {
// Cart cart = cartRepo.findById(cartId)
// .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));
// Product product = productRepo.findById(productId)
// .orElseThrow(() -> new ResourceNotFoundException("Product", "productId",
// productId));

// CartItem cartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId,
// productId);
// if (cartItem == null) {
// throw new APIException("Product " + product.getProductName() + " not
// available in the cart!!!");
// }

// // Cập nhật giá của sản phẩm trong giỏ hàng
// double cartPrice = cart.getTotalPrice() - (cartItem.getProductPrice() *
// cartItem.getQuantity());
// cartItem.setProductPrice(product.getSpecialPrice());
// cart.setTotalPrice(cartPrice + (cartItem.getProductPrice() *
// cartItem.getQuantity()));
// cartItemRepo.save(cartItem);
// }

// @Override
// public CartDTO updateProductQuantityInCart(Long cartId, Long productId,
// Integer quantity) {
// Cart cart = cartRepo.findById(cartId)
// .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));
// Product product = productRepo.findById(productId)
// .orElseThrow(() -> new ResourceNotFoundException("Product", "productId",
// productId));

// if (product.getQuantity() == 0) {
// throw new APIException(product.getProductName() + " is not available");
// }
// if (product.getQuantity() < quantity) {
// throw new APIException("Please order " + product.getProductName()
// + " less than or equal to the available quantity " + product.getQuantity() +
// ".");
// }

// CartItem cartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId,
// productId);
// if (cartItem == null) {
// throw new APIException("Product " + product.getProductName() + " not
// available in the cart!!!");
// }

// // Cập nhật số lượng sản phẩm và giá
// double cartPrice = cart.getTotalPrice() - (cartItem.getProductPrice() *
// cartItem.getQuantity());
// product.setQuantity(product.getQuantity() + cartItem.getQuantity() -
// quantity);
// cartItem.setQuantity(quantity);
// cartItem.setProductPrice(product.getSpecialPrice());
// cartItem.setDiscount(product.getDiscount());
// cart.setTotalPrice(cartPrice + (cartItem.getProductPrice() * quantity));

// cartItemRepo.save(cartItem);
// return mapCartToDTO(cart);
// }

// @Override
// public String deleteProductFromCart(Long cartId, Long productId) {
// Cart cart = cartRepo.findById(cartId)
// .orElseThrow(() -> new ResourceNotFoundException("Cart", "cartId", cartId));

// CartItem cartItem = cartItemRepo.findCartItemByProductIdAndCartId(cartId,
// productId);
// if (cartItem == null) {
// throw new ResourceNotFoundException("Product", "productId", productId);
// }

// cart.setTotalPrice(cart.getTotalPrice() - (cartItem.getProductPrice() *
// cartItem.getQuantity()));
// Product product = cartItem.getProduct();
// product.setQuantity(product.getQuantity() + cartItem.getQuantity());

// cartItemRepo.deleteCartItemByProductIdAndCartId(cartId, productId);
// return "Product " + cartItem.getProduct().getProductName() + " removed from
// the cart !!!";
// }

// private CartDTO mapCartToDTO(Cart cart) {
// CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);
// List<CartItemDTO> cartItemDTOs = cart.getCartItems().stream().map(cartItem ->
// {
// CartItemDTO cartItemDTO = new CartItemDTO();
// ProductDTO productDTO = modelMapper.map(cartItem.getProduct(),
// ProductDTO.class);
// cartItemDTO.setProduct(productDTO);
// cartItemDTO.setQuantity(cartItem.getQuantity());
// cartItemDTO.setDiscount(cartItem.getDiscount());
// cartItemDTO.setProductPrice(cartItem.getProductPrice());
// return cartItemDTO;
// }).collect(Collectors.toList());

// cartDTO.setCartItemDTOS(cartItemDTOs);
// return cartDTO;
// }
// }
