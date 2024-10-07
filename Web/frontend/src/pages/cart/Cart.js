import React, { useState, useEffect } from 'react';
import { GET_EMAIL, DELETE_ID } from '../../api/Service';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const email = localStorage.getItem("email");
    const CartId = localStorage.getItem("CartId");
    const navigate = useNavigate();

    useEffect(() => {
        if (email) {
            GET_EMAIL('users', email)
                .then(response => {
                    const cart = response.cart;
                    setCartItems(cart.products);
                    setTotalPrice(cart.totalPrice);
                    localStorage.setItem('CartId', cart.cartId);
                    localStorage.setItem('CartLength', cart.products.length);
                })
                .catch(error => {
                    console.error('Failed to fetch cart items:', error);
                });
        } else {
            console.warn('No id found in localStorage.');
        }
    }, [email]);

    const handleDelete = (CartId, productId) => {
        const url = `/carts/${CartId}/product/${productId}`;

        DELETE_ID(url)
            .then(response => {
                const updatedCartItems = cartItems.filter(item => item.productId !== productId);
                setCartItems(updatedCartItems);
                localStorage.setItem('CartLength', updatedCartItems.length);
                const newTotalPrice = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
                setTotalPrice(newTotalPrice);

                toast.success("Xóa thành công", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                navigate('/cart');
            })
            .catch(error => {
                console.error('Delete error:', error);
                toast.error("Xóa thất bại", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
            });
    };

    const updateQuantity = (productId, newQuantity) => {
        const updatedCartItems = cartItems.map(item =>
            item.productId === productId ? { ...item, quantity: newQuantity } : item
        );

        setCartItems(updatedCartItems);
        const newTotalPrice = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(newTotalPrice);
    };

    const handleEditQuantity = (productId, newQuantity) => {
        // Prevent the quantity from being less than 1
        if (newQuantity < 1) return;

        // Update the quantity for the specified product
        const updatedCartItems = cartItems.map(item =>
            item.productId === productId ? { ...item, quantity: newQuantity } : item
        );

        setCartItems(updatedCartItems);

        // Recalculate total price
        const newTotalPrice = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(newTotalPrice);

        toast.success("Quantity updated successfully", {
            position: "bottom-right",
            autoClose: 2000,
        });
    };

    const increaseQuantity = (productId) => {
        const item = cartItems.find(item => item.productId === productId);
        if (item) {
            handleEditQuantity(productId, item.quantity + 1);
        }
    };

    const decreaseQuantity = (productId) => {
        const item = cartItems.find(item => item.productId === productId);
        if (item && item.quantity > 1) {
            handleEditQuantity(productId, item.quantity - 1);
        }
    };

    return (
        <>
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col" className='text-center' width="200">Quantity</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" className="text-center" width="100"> </th>
                                            <th scope="col" className="text-center" width="100"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.productId}>
                                                <td>
                                                    <figure className="itemside">
                                                        <div className="aside">
                                                            <img src={`http://localhost:8080/api/public/products/image/${item.image}`} className="img-sm" alt={item.productName} />
                                                        </div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark text-decoration-none">{item.productName}</a>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-light" type="button" onClick={() => decreaseQuantity(item.productId)}> - </button>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            value={item.quantity}
                                                            onChange={(e) => handleEditQuantity(item.productId, Number(e.target.value))}
                                                            min="1" // Prevents entering 0 or negative numbers
                                                        />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-light" type="button" onClick={() => increaseQuantity(item.productId)}> + </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">${(item.price * item.quantity).toFixed(2)}</var>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn btn-danger" onClick={() => handleDelete(CartId, item.productId)}>
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="card-body border-top">
                                    <a href="/Payment" className="btn btn-primary float-md-right">Payment <i className="fa fa-chevron-right"></i> </a>
                                    <a href="/" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
                                </div>
                            </div>

                            <div className="alert alert-success mt-3">
                                <p className="icontext">
                                    <i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
                                </p>
                            </div>
                        </main>

                        <aside className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Have coupon?</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Coupon code" />
                                                <span className="input-group-append">
                                                    <button className="btn btn-primary">Apply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <dl className="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd className="text-right">USD ${totalPrice.toFixed(2)}</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd className="text-right">USD 0.00</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Total:</dt>
                                        <dd className="text-right h5"><strong>USD ${totalPrice.toFixed(2)}</strong></dd>
                                    </dl>
                                    <hr />
                                    <p className="text-center mb-3">
                                        <img height="26" className="payment" src={require("../../assets/images/misc/payments.png")} alt='Payment options' />
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section-name border-top padding-y">
                <div className="container">
                    <h6>Payment and refund policy</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
        </>
    );
};

export default Cart;
