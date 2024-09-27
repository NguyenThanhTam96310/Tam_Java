import React from 'react';
import i1 from "../../assets/images/items/1.jpg";
import i2 from "../../assets/images/items/2.jpg";
import i3 from "../../assets/images/items/3.jpg";

const Order = () => {
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
                            <article className="card mb-4">
                                <header className="card-header">
                                    <a href="#" className="float-right"> <i className="fa fa-print"></i> In</a>
                                    <strong className="d-inline-block mr-3">Mã đơn hàng: 6123456789</strong>
                                    <span>Ngày đặt hàng: 16 tháng 12 năm 2018</span>
                                </header>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h6 className="text-muted">Giao hàng đến</h6>
                                            <p>Michael Jackson <br />
                                                Điện thoại: +1234567890 Email: myname@gmail.com <br />
                                                Địa chỉ: Số nhà, Tên tòa nhà, Đường 123, <br />
                                                Hộp thư: 100123
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="text-muted">Thanh toán</h6>
                                            <span className="text-success">
                                                <i className="fab fa-lg fa-cc-visa"></i>
                                                Visa **** 4216
                                            </span>
                                            <p>Tổng tạm: $356 <br />
                                                Phí vận chuyển: $56 <br />
                                                <span className="b">Tổng cộng: $456</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td width="65">
                                                    <img src={i1} className="img-xs border" alt="Sản phẩm 1" />
                                                </td>
                                                <td>
                                                    <p className="title mb-0">Tên sản phẩm ở đây</p>
                                                    <var className="price text-muted">USD 145</var>
                                                </td>
                                                <td> Người bán <br /> Nike clothing </td>
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
                                            <tr>
                                                <td>
                                                    <img src={i2} className="img-xs border" alt="Sản phẩm 2" />
                                                </td>
                                                <td>
                                                    <p className="title mb-0">Tên sản phẩm khác ở đây</p>
                                                    <var className="price text-muted">USD 15</var>
                                                </td>
                                                <td> Người bán <br /> ABC shop </td>
                                                <td>
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
                                            <tr>
                                                <td>
                                                    <img src={i3} className="img-xs border" alt="Sản phẩm 3" />
                                                </td>
                                                <td>
                                                    <p className="title mb-0">Tên sản phẩm ở đây</p>
                                                    <var className="price text-muted">USD 145</var>
                                                </td>
                                                <td> Người bán <br /> Walmart </td>
                                                <td>
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
                                        </tbody>
                                    </table>
                                </div>
                            </article>
                            {/* Kết thúc Thẻ đơn hàng */}
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Order;
