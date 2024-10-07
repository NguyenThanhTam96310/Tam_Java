import React, { useState, useEffect } from 'react';
import { GET_EMAIL, GET_ORDER } from "../../api/Service";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";

const MyProfile = () => {
    const [user, setUser] = useState({});
    const [order, setOrder] = useState([]);
    const [showAllOrders, setShowAllOrders] = useState(false);
    const email = localStorage.getItem('email');

    useEffect(() => {
        if (email) {
            GET_EMAIL('users', email)
                .then(response => {
                    setUser(response);
                    console.log("===user", response)
                })
                .catch(error => {
                    console.error('Failed to fetch user data:', error);
                });
            GET_ORDER('users', email)
                .then(response => {
                    setOrder(response);
                    console.log("===order", response)
                })
                .catch(error => {
                    console.error('Failed to fetch user data:', error);
                });
        } else {
            console.warn('No email found in localStorage.');
        }
    }, [email]);

    const displayedOrders = showAllOrders ? order : order.slice(0, 1);

    return (
        <>
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <h2 className="title-page">Tài khoản của tôi</h2>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="list-group">
                                <a className="list-group-item active" href="/myprofile">Tổng quan tài khoản</a>
                                <a className="list-group-item" href="/address">Địa chỉ của tôi</a>
                                <a className="list-group-item" href="/order">Đơn hàng của tôi</a>
                                <a className="list-group-item" href="/wishlist">Danh sách yêu thích của tôi</a>
                                <a className="list-group-item" href="/myselling">Sản phẩm tôi bán</a>
                                <a className="list-group-item" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside>

                        <main className="col-md-9">
                            <article className="card mb-3">
                                <div className="card-body">
                                    <figure className="icontext">
                                        <div className="icon">
                                            <img className="rounded-circle img-sm border" src={avatar3} alt="Avatar" />
                                        </div>
                                        <div className="text">
                                            <strong>{user?.firstName || 'Tên người dùng'}</strong><br />
                                            <p className="mb-2">{user?.email || 'email@example.com'}</p>
                                            <a href="#" className="btn btn-light btn-sm">Chỉnh sửa</a>
                                        </div>
                                    </figure>
                                    <hr />
                                    <p>
                                        <i className="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ của tôi:
                                        <br />
                                        Thành phố {user?.address?.city || 'Chưa cập nhật'},
                                        Tên đường {user?.address?.street || 'Chưa cập nhật'},
                                        Toà nhà {user?.address?.buildingName || 'Chưa cập nhật'},
                                        Nhà {user?.address?.state || 'Chưa cập nhật'}
                                        &nbsp; <a href="#" className="btn-link">Chỉnh sửa</a>
                                    </p>

                                    <article className="card-group card-stat">
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">38</h4>
                                                <span>Đơn hàng</span>
                                            </div>
                                        </figure>
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">5</h4>
                                                <span>Danh sách yêu thích</span>
                                            </div>
                                        </figure>
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">12</h4>
                                                <span>Đang chờ giao hàng</span>
                                            </div>
                                        </figure>
                                        <figure className="card bg">
                                            <div className="p-3">
                                                <h4 className="title">50</h4>
                                                <span>Sản phẩm đã giao</span>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                            </article>

                            <article className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-4">Đơn hàng gần đây</h5>
                                    <div className="row">
                                        {displayedOrders.map((orderItem) => (
                                            orderItem.orderItems?.map((item) => (
                                                <div className="col-md-6" key={item.orderItemId}>
                                                    <figure className="itemside mb-3">
                                                        <div className="aside">
                                                            <img src={`http://localhost:8080/api/public/products/image/${item.product.image}`} className="border img-sm" alt="Product Image" />
                                                        </div>
                                                        <figcaption className="info">
                                                            <time className="text-muted">
                                                                <i className="fa fa-calendar-alt"></i> {orderItem.orderDate}
                                                            </time>
                                                            <p>{item.product.productName}</p>
                                                            <span className="text-success">{orderItem.orderStatus}</span>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            ))
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setShowAllOrders(!showAllOrders)}
                                        className="btn btn-outline-primary btn-block"
                                    >
                                        {showAllOrders ? 'Ẩn bớt đơn hàng' : 'Xem tất cả đơn hàng'} <i className="fa fa-chevron-down"></i>
                                    </button>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyProfile;
