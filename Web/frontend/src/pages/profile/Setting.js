import React from 'react';
import { useLocation } from 'react-router-dom';
import avatar from "../../assets/images/avatars/avatar1.jpg"; // giả sử avatar1.jpg nằm trong thư mục đúng

const Setting = () => {
    return (
        <>
            {/* ========================= PHẦN TIÊU ĐỀ ========================= */}
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <h2 className="title-page">Tài khoản của tôi</h2>
                </div> {/* container //  */}
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
                                <a className="list-group-item " href="wishlist">Danh sách yêu thích</a>
                                <a className="list-group-item" href="/myselling">Mặt hàng tôi bán</a>
                                <a className="list-group-item active" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside> {/* col.// */}
                        <main className="col-md-9">

                            <div className="card">
                                <div className="card-body">
                                    <form className="row">
                                        <div className="col-md-9">
                                            <div className="form-row">
                                                <div className="col form-group">
                                                    <label>Tên</label>
                                                    <input type="text" className="form-control" value="Vosidiy" />
                                                </div> {/* form-group end.// */}
                                                <div className="col form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" value="vosidiy@gmail.com" />
                                                </div> {/* form-group end.// */}
                                            </div> {/* form-row.// */}

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Quốc gia</label>
                                                    <select id="inputState" className="form-control">
                                                        <option> Chọn...</option>
                                                        <option>Uzbekistan</option>
                                                        <option>Russia</option>
                                                        <option selected>Hoa Kỳ</option>
                                                        <option>Ấn Độ</option>
                                                        <option>Afghanistan</option>
                                                    </select>
                                                </div> {/* form-group end.// */}
                                                <div className="form-group col-md-6">
                                                    <label>Thành phố</label>
                                                    <input type="text" className="form-control" />
                                                </div> {/* form-group end.// */}
                                            </div> {/* form-row.// */}

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Mã bưu điện</label>
                                                    <input type="text" className="form-control" value="123009" />
                                                </div> {/* form-group end.// */}
                                                <div className="form-group col-md-6">
                                                    <label>Số điện thoại</label>
                                                    <input type="text" className="form-control" value="+123456789" />
                                                </div> {/* form-group end.// */}
                                            </div> {/* form-row.// */}

                                            <button className="btn btn-primary">Lưu</button>
                                            <button className="btn btn-light">Đổi mật khẩu</button>

                                            <br /><br /><br /><br /><br /><br />

                                        </div> {/* col.// */}
                                        <div className="col-md">
                                            <img src={avatar} className="img-md rounded-circle border" alt="Hình đại diện người dùng" />
                                        </div>  {/* col.// */}
                                    </form>
                                </div> {/* card-body.// */}
                            </div> {/* card .// */}

                        </main> {/* col.// */}
                    </div>

                </div> {/* container .//  */}
            </section>
            {/* ========================= KẾT THÚC PHẦN NỘI DUNG ========================= */}
        </>
    );
};

export default Setting;
