import React from 'react';
import { useLocation } from 'react-router-dom';
import i1 from "../../assets/images/items/1.jpg";
import i2 from "../../assets/images/items/2.jpg";
import i3 from "../../assets/images/items/3.jpg";

const Wishlist = () => {
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
                            <nav className="list-group  text-decoration: none;">
                                <a className="list-group-item" href="/myprofile">Tổng quan tài khoản</a>
                                <a className="list-group-item" href="/address">Địa chỉ của tôi</a>
                                <a className="list-group-item" href="/order">Đơn hàng của tôi</a>
                                <a className="list-group-item active" href="wishlist">Danh sách yêu thích</a>
                                <a className="list-group-item" href="/myselling">Mặt hàng tôi bán</a>
                                <a className="list-group-item" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside>
                        {/* col.// */}
                        <main className="col-md-9">
                            <article className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <figure className="itemside mb-4">
                                                <div className="aside">
                                                    <img src={i1} className="border img-md" alt="sản phẩm 1" />
                                                </div>
                                                <figcaption className="info">
                                                    <a href="#" className="title">Tên sản phẩm tuyệt vời ở đây</a>
                                                    <p className="price mb-2">$80</p>
                                                    <a href="#" className="btn btn-secondary btn-sm">Thêm vào giỏ</a>
                                                    <a href="#" className="btn btn-danger btn-sm m-2" data-toggle="tooltip" title="Xóa khỏi danh sách yêu thích">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        {/* col.// */}

                                        <div className="col-md-6">
                                            <figure className="itemside mb-4">
                                                <div className="aside">
                                                    <img src={i2} className="border img-md" alt="sản phẩm 2" />
                                                </div>
                                                <figcaption className="info">
                                                    <a href="#" className="title">Áo khoác nam cho mùa đông</a>
                                                    <p className="price mb-2">$1280</p>
                                                    <a href="#" className="btn btn-secondary btn-sm">Thêm vào giỏ</a>
                                                    <a href="#" className="btn btn-danger btn-sm m-2" data-toggle="tooltip" title="Xóa khỏi danh sách yêu thích">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        {/* col.// */}

                                        <div className="col-md-6">
                                            <figure className="itemside mb-4">
                                                <div className="aside">
                                                    <img src={i3} className="border img-md" alt="sản phẩm 3" />
                                                </div>
                                                <figcaption className="info">
                                                    <a href="#" className="title">Cuốn sách khác của mặt hàng này</a>
                                                    <p className="price mb-2">$280</p>
                                                    <a href="#" className="btn btn-secondary btn-sm">Thêm vào giỏ</a>
                                                    <a href="#" className="btn btn-danger btn-sm m-2" data-toggle="tooltip" title="Xóa khỏi danh sách yêu thích">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        {/* col.// */}
                                    </div>
                                    {/* row .//  */}
                                </div>
                                {/* card-body.// */}
                            </article>
                        </main>
                        {/* col.// */}
                    </div>
                </div>
            </section>
            {/* ========================= KẾT THÚC PHẦN NỘI DUNG ========================= */}
        </>
    );
};

export default Wishlist;
