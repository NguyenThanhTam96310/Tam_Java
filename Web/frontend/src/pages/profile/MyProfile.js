import React from 'react';
import { useLocation } from 'react-router-dom';
import i1 from "../../assets/images/items/1.jpg";
import i2 from "../../assets/images/items/2.jpg";
import i3 from "../../assets/images/items/3.jpg";

const MyProfile = () => {
    return (
        <>
            {/* ========================= PHẦN TIÊU ĐỀ ========================= */}
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <h2 className="title-page">Tài khoản của tôi</h2>
                </div>
            </section>
            {/* ========================= KẾT THÚC PHẦN TIÊU ĐỀ ========================= */}

            {/* ========================= PHẦN NỘI DUNG ========================= */}
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
                        {/* col.// */}
                        <main className="col-md-9">
                            <article className="card mb-3">
                                <div className="card-body">
                                    <figure className="icontext">
                                        <div className="icon">
                                            <img className="rounded-circle img-sm border" src={require("../../assets/images/avatars/avatar3.jpg")} />
                                        </div>
                                        <div className="text">
                                            <strong>Ông. Jackson Someone</strong><br />
                                            <p className="mb-2">myloginname@gmail.com</p>
                                            <a href="#" className="btn btn-light btn-sm">Chỉnh sửa</a>
                                        </div>
                                    </figure>
                                    <hr />
                                    <p>
                                        <i className="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ của tôi:
                                        <br />
                                        Thành phố Tashkent, Tên đường, Toà nhà 123, Nhà 321 &nbsp;
                                        <a href="#" className="btn-link">Chỉnh sửa</a>
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
                                        <div className="col-md-6">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src={i1} className="border img-sm" alt="Đơn hàng 1" /></div>
                                                <figcaption className="info">
                                                    <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                    <p>Tên sách tuyệt vời nằm ở đây</p>
                                                    <span className="text-success">Đơn hàng đã xác nhận</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-md-6">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src={i2} className="border img-sm" alt="Đơn hàng 2" /></div>
                                                <figcaption className="info">
                                                    <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                    <p>Cách để trở nên giàu có</p>
                                                    <span className="text-success">Đã khởi hành</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-md-6">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src={i3} className="border img-sm" alt="Đơn hàng 3" /></div>
                                                <figcaption className="info">
                                                    <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                    <p>Sách Harry Potter</p>
                                                    <span className="text-success">Đã giao hàng</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-outline-primary btn-block">Xem tất cả đơn hàng <i className="fa fa-chevron-down"></i></a>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </section>
            {/* ========================= KẾT THÚC PHẦN NỘI DUNG ========================= */}
        </>
    );
};

export default MyProfile;
