import React from 'react';

const Address = () => {
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
                                <a className="list-group-item active" href="/address">Địa chỉ của tôi</a>
                                <a className="list-group-item" href="/order">Đơn hàng của tôi</a>
                                <a className="list-group-item" href="/wishlist">Danh sách yêu thích của tôi</a>
                                <a className="list-group-item" href="/myselling">Sản phẩm tôi bán</a>
                                <a className="list-group-item" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside>
                        {/* col.// */}
                        <main className="col-md-9">
                            <a href="#" className="btn btn-light mb-3">
                                <i className="fa fa-plus"></i> Thêm địa chỉ mới
                            </a>

                            <div className="row">
                                <div className="col-md-6">
                                    <article className="box mb-4">
                                        <h6>London, Vương quốc Anh</h6>
                                        <p>Toà nhà: Nestone <br /> Tầng: 22, Căn hộ: 12</p>
                                        <a href="#" className="btn btn-light disabled">
                                            <i className="fa fa-check"></i> Mặc định
                                        </a>
                                        <a href="#" className="btn btn-light">
                                            <i className="fa fa-pen"></i>
                                        </a>
                                        <a href="#" className="btn btn-light">
                                            <i className="text-danger fa fa-trash"></i>
                                        </a>
                                    </article>
                                </div>
                                {/* col.// */}
                                <div className="col-md-6">
                                    <article className="box mb-4">
                                        <h6>Tashkent, Uzbekistan</h6>
                                        <p>Toà nhà một <br /> Tầng: 2, Căn hộ: 32</p>
                                        <a href="#" className="btn btn-light">Đặt làm mặc định</a>
                                        <a href="#" className="btn btn-light">
                                            <i className="fa fa-pen"></i>
                                        </a>
                                        <a href="#" className="btn btn-light">
                                            <i className="text-danger fa fa-trash"></i>
                                        </a>
                                    </article>
                                </div>
                                {/* col.// */}
                                <div className="col-md-6">
                                    <article className="box mb-4">
                                        <h6>Moscow, Nga</h6>
                                        <p>Đường Lenin <br /> Toà nhà A, Tầng: 3, Căn hộ: 32</p>
                                        <a href="#" className="btn btn-light">Đặt làm mặc định</a>
                                        <a href="#" className="btn btn-light">
                                            <i className="fa fa-pen"></i>
                                        </a>
                                        <a href="#" className="btn btn-light">
                                            <i className="text-danger fa fa-trash"></i>
                                        </a>
                                    </article>
                                </div>
                                {/* col.// */}
                            </div>
                            {/* row.// */}
                        </main>
                    </div>
                </div>
            </section>
            {/* ========================= KẾT THÚC PHẦN NỘI DUNG ========================= */}
        </>
    );
};

export default Address;
