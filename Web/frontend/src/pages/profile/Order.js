import { GET_EMAIL, GET_ORDER } from "../../api/Service";
import React, { useState, useEffect } from 'react';

const Order = () => {
    const [user, setUser] = useState({});
    const [order, setOrder] = useState([]);
    const email = localStorage.getItem('email');
    const ship = 20;

    useEffect(() => {
        if (email) {
            const fetchUserData = async () => {
                try {
                    const userResponse = await GET_EMAIL('users', email);
                    setUser(userResponse);
                    console.log("===user", userResponse);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            };

            const fetchOrderData = async () => {
                try {
                    const orderResponse = await GET_ORDER('users', email);
                    setOrder(orderResponse);
                    console.log("===order", orderResponse);
                } catch (error) {
                    console.error('Failed to fetch order data:', error);
                }
            };

            fetchUserData();
            fetchOrderData();
        } else {
            console.warn('No email found in localStorage.');
        }
    }, [email]);

    const total = order?.[0]?.totalAmount + ship;

    return (
        <>
            {/* ========================= SECTION PAGETOP ========================= */}
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <h2 className="title-page">Tài khoản của tôi</h2>
                </div>
            </section>
            {/* ========================= SECTION PAGETOP END// ========================= */}

            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="list-group">
                                <a className="list-group-item" href="/myprofile">Tổng quan tài khoản</a>
                                <a className="list-group-item" href="/address">Địa chỉ của tôi</a>
                                <a className="list-group-item active" href="/order">Đơn hàng của tôi</a>
                                <a className="list-group-item" href="wishlist">Danh sách yêu thích</a>
                                <a className="list-group-item" href="/myselling">Sản phẩm tôi đang bán</a>
                                <a className="list-group-item" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside>
                        {/* col.// */}
                        <main className="col-md-9">
                            {/* Thẻ đơn hàng */}
                            {order.length > 0 ? (
                                <article className="card mb-4">
                                    <header className="card-header">
                                        <a href="#" className="float-right"> <i className="fa fa-print"></i> In</a>
                                        <strong className="d-inline-block mr-3">Mã đơn hàng: {order[0].orderId}</strong> {/* Assuming orderId is available */}
                                        <span>Ngày đặt hàng: {new Date(order[0].orderDate).toLocaleDateString()}</span> {/* Assuming orderDate is available */}
                                    </header>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h6 className="text-muted">Giao hàng đến</h6>
                                                <p>{user.firstName} {user.lastName} <br />
                                                    Điện thoại: {user.mobileNumber} Email: {email} <br />
                                                    Địa chỉ: Tên tòa nhà: {user.address?.buildingName}, Đường: {user.address?.street}, <br />
                                                    Thành phố: {user.address?.city}
                                                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Thanh toán</h6>
                                                <span className="text-success">
                                                    <i className="fab fa-lg fa-cc-visa"></i>
                                                    Visa **** 4216
                                                </span>
                                                <p>Tổng tạm: ${order[0]?.totalAmount} <br />
                                                    Phí vận chuyển: ${ship} <br />
                                                    <span className="b">Tổng cộng: ${total}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <tbody>
                                                {order[0]?.orderItems?.map((item) => (
                                                    <tr key={item.orderItemId}>
                                                        <td width="65" >
                                                            <img src={`http://localhost:8080/api/public/products/image/${item.product.image}`} className="img-xs border" alt="Sản phẩm 1" />
                                                        </td>
                                                        <td>
                                                            <p className="title mb-0" style={{ maxWidth: '200px', overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                                                                {item.product.productName}
                                                            </p>
                                                            <var className="price text-muted">USD {item.product.price}</var>
                                                        </td>
                                                        <td width="250">
                                                            <a href="#" className="btn btn-outline-primary">Theo dõi đơn hàng</a>
                                                            <div className="dropdown d-inline-block">
                                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">Thêm</a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item">Trả hàng</a>
                                                                    <a href="#" className="dropdown-item">Hủy đơn hàng</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </article>
                            ) : (
                                <p className="text-center">Không có đơn hàng nào để hiển thị.</p>
                            )}
                            {/* Kết thúc Thẻ đơn hàng */}
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Order;
