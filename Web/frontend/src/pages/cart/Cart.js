import React, { useState, useEffect } from 'react';
import i1 from "../../assets/images/items/1.jpg";  // Example image
import { GET_EMAIL } from '../../api/Service';

const Cart = () => {
    // State for holding cart items and cart length
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Get email from localStorage
    const email = localStorage.getItem("email");

    useEffect(() => {
        // Check if email exists before making the API call
        if (email) {
            GET_EMAIL('users', email)
                .then(response => {
                    // Assuming cart object is inside response and cartItems are in response.cart.products
                    const cart = response.cart;
                    setCartItems(cart.products);
                    setTotalPrice(cart.totalPrice);
                    console.log('Cart Items:', cart.products);
                })
                .catch(error => {
                    console.error('Failed to fetch cart items:', error);
                });
        } else {
            console.warn('No email found in localStorage.');
        }
    }, [email]);

    return (
        <>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" className="text-right" width="200"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.productId}>
                                                <td>
                                                    <figure className="itemside">
                                                        <div className="aside">
                                                            <img src={`http://localhost:8080/api/public/products/image/${item.image}`} className="img-sm" alt={item.name} />
                                                        </div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark text-decoration-none">{item.productName}</a>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option>{item.quantity}</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">${item.price.toFixed(2)}</var>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <a href="#" className="btn btn-danger">Remove</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="card-body border-top">
                                    <a href="/Payment" className="btn btn-primary float-md-right">Payment <i className="fa fa-chevron-right"></i> </a>
                                    <a href="#" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
                                </div>
                            </div>

                            <div className="alert alert-success mt-3">
                                <p className="icontext">
                                    <i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
                                </p>
                            </div>
                        </main>

                        {/* Right Sidebar */}
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
            {/* ========================= SECTION CONTENT END ========================= */}

            {/* ========================= SECTION POLICY ========================= */}
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
