import React from 'react';
import { useLocation } from 'react-router-dom';
import i1 from "../../assets/images/items/1.jpg";
import i2 from "../../assets/images/items/2.jpg";
import i3 from "../../assets/images/items/3.jpg";
import i4 from "../../assets/images/items/4.jpg";
import i5 from "../../assets/images/items/5.jpg";

const MySelling = () => {
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
                                <a className="list-group-item" href="/myprofile">Tổng quan tài khoản</a>
                                <a className="list-group-item" href="/address">Địa chỉ của tôi</a>
                                <a className="list-group-item" href="/order">Đơn hàng của tôi</a>
                                <a className="list-group-item" href="wishlist">Danh sách yêu thích của tôi</a>
                                <a className="list-group-item active" href="/myselling">Sản phẩm tôi bán</a>
                                <a className="list-group-item" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside> {/* col.// */}
                        <main className="col-md-9">

                            <article className="card">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <figure className="card card-product-grid">
                                                <div className="img-wrap">
                                                    <img src={i1} alt="Sản phẩm 1" />
                                                </div> {/* img-wrap.// */}
                                                <figcaption className="info-wrap">
                                                    <a href="#" className="title mb-2 text-decoration-none">Áo sơ mi thiết kế mới cho thể thao unisex bán chạy</a>
                                                    <div className="price-wrap mb-3">
                                                        <span className="price">$32.00-$40.00</span>
                                                        <small className="text-muted">/mỗi sản phẩm</small>
                                                    </div> {/* price-wrap.// */}
                                                    <a href="#" className="btn btn-outline-primary mr-2"> <i className="fa fa-pen"></i> Chỉnh sửa </a>
                                                    <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> Xem </a>
                                                    <hr />
                                                    <a href="#" className="btn btn-success btn-block">  Quảng bá </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}

                                        <div className="col-md-4">
                                            <figure className="card card-product-grid">
                                                <div className="img-wrap">
                                                    <img src={i2} alt="Sản phẩm 2" />
                                                </div> {/* img-wrap.// */}
                                                <figcaption className="info-wrap">
                                                    <a href="#" className="title mb-2 text-decoration-none">Áo khoác mưa PU mùa đông chất lượng cao cho nam</a>
                                                    <div className="price-wrap mb-3">
                                                        <span className="price">$41.00-$50.00</span>
                                                        <small className="text-muted">/mỗi sản phẩm</small>
                                                    </div> {/* price-wrap.// */}
                                                    <a href="#" className="btn btn-outline-primary mr-2"> <i className="fa fa-pen"></i> Chỉnh sửa </a>
                                                    <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> Xem </a>
                                                    <hr />
                                                    <a href="#" className="btn btn-success btn-block">  Quảng bá </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}

                                        <div className="col-md-4">
                                            <figure className="card card-product-grid">
                                                <div className="img-wrap">
                                                    <img src={i3} alt="Sản phẩm 3" />
                                                </div> {/* img-wrap.// */}
                                                <figcaption className="info-wrap">
                                                    <a href="#" className="title mb-2 text-decoration-none">Quần áo demo giá rẻ và tốt nhất với phong cách thời trang mới nhất cho nam</a>
                                                    <div className="price-wrap mb-3">
                                                        <span className="price">$32.00-$40.00</span>
                                                        <small className="text-muted">/mỗi sản phẩm</small>
                                                    </div> {/* price-wrap.// */}
                                                    <a href="#" className="btn btn-outline-primary mr-2"> <i className="fa fa-pen"></i> Chỉnh sửa </a>
                                                    <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> Xem </a>
                                                    <hr />
                                                    <a href="#" className="btn btn-success btn-block">  Quảng bá </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}

                                        <div className="col-md-4">
                                            <figure className="card card-product-grid">
                                                <div className="img-wrap">
                                                    <img src={i4} alt="Sản phẩm 4" />
                                                </div> {/* img-wrap.// */}
                                                <figcaption className="info-wrap">
                                                    <a href="#" className="title mb-2 text-decoration-none">Quần áo demo giá rẻ và tốt nhất với phong cách thời trang mới nhất cho nam</a>
                                                    <div className="price-wrap mb-3">
                                                        <span className="price">$32.00-$40.00</span>
                                                        <small className="text-muted">/mỗi sản phẩm</small>
                                                    </div> {/* price-wrap.// */}
                                                    <a href="#" className="btn btn-outline-primary mr-2"> <i className="fa fa-pen"></i> Chỉnh sửa </a>
                                                    <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> Xem </a>
                                                    <hr />
                                                    <a href="#" className="btn btn-success btn-block">  Quảng bá </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}

                                        <div className="col-md-4">
                                            <figure className="card card-product-grid">
                                                <div className="img-wrap">
                                                    <img src={i5} alt="Sản phẩm 5" />
                                                </div> {/* img-wrap.// */}
                                                <figcaption className="info-wrap">
                                                    <a href="#" className="title mb-2 text-decoration-none">Quần áo demo giá rẻ và tốt nhất với phong cách thời trang mới nhất cho nam</a>
                                                    <div className="price-wrap mb-3">
                                                        <span className="price">$32.00-$40.00</span>
                                                        <small className="text-muted">/mỗi sản phẩm</small>
                                                    </div> {/* price-wrap.// */}
                                                    <a href="#" className="btn btn-outline-primary mr-2"> <i className="fa fa-pen"></i> Chỉnh sửa </a>
                                                    <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> Xem </a>
                                                    <hr />
                                                    <a href="#" className="btn btn-success btn-block">  Quảng bá </a>
                                                </figcaption>
                                            </figure>
                                        </div> {/* col.// */}
                                    </div> {/* row .//  */}

                                </div> {/* card-body.// */}
                            </article>

                        </main> {/* col.// */}
                    </div>

                </div> {/* container .//  */}
            </section>
            {/* ========================= KẾT THÚC PHẦN NỘI DUNG ========================= */}
        </>
    );
};

export default MySelling;
