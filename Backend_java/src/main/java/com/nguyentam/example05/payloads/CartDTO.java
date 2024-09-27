package com.nguyentam.example05.payloads;

import java.util.ArrayList;
import java.util.List;

import com.nguyentam.example05.entity.CartItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartDTO {
  private Long cartId;
  private Double totalPrice = 0.0;
  private List<ProductDTO> products = new ArrayList<>();
  private List<CartItemDTO> cartItemDTOs = new ArrayList<>();
  // private UserDTO user;
}