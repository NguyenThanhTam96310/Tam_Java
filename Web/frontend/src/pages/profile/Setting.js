import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatars/avatar1.jpg"; // Assuming avatar1.jpg is in the correct directory
import { GET_EMAIL } from "../../api/Service";

const Setting = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const email = localStorage.getItem('email');

    useEffect(() => {
        const fetchUserData = async () => {
            if (email) {
                try {
                    const response = await GET_EMAIL('users', email);
                    setUser(response);
                    console.log("===user", response);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                console.warn('No email found in localStorage.');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [email]);

    const handleSave = (e) => {
        e.preventDefault();
        // Here, you would typically send the updated user info to your server
        console.log("Saving user settings:", user);
    };

    if (loading) {
        return <p>Loading...</p>; // Show loading state while fetching user data
    }

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
                                <a className="list-group-item" href="wishlist">Danh sách yêu thích</a>
                                <a className="list-group-item" href="/myselling">Mặt hàng tôi bán</a>
                                <a className="list-group-item active" href="/setting">Cài đặt</a>
                                <a className="list-group-item" href="/">Đăng xuất</a>
                            </nav>
                        </aside>
                        <main className="col-md-9">
                            <div className="card">
                                <div className="card-body">
                                    <form className="row" onSubmit={handleSave}>
                                        <div className="col-md-9">
                                            <div className="form-row">
                                                <div className="col form-group">
                                                    <label>Tên</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={user.firstName || ''}
                                                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col form-group">
                                                    <label>Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        value={user.email || ''}
                                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Quốc gia</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={user.address?.country || ''}
                                                        onChange={(e) => setUser({
                                                            ...user,
                                                            address: {
                                                                ...user.address,
                                                                country: e.target.value
                                                            }
                                                        })}
                                                    />

                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Thành phố</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={user.address?.city || ''}
                                                        onChange={(e) => setUser({ ...user, address: { ...user.address, city: e.target.value } })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Mã bưu điện</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={user.zipCode || ''}
                                                        onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Số điện thoại</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={user.mobileNumber || ''}
                                                        onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <button className="btn btn-primary" type="submit">Lưu</button>
                                            <button className="btn btn-light" type="button">Đổi mật khẩu</button>
                                            <br /><br /><br /><br /><br /><br />
                                        </div>
                                        <div className="col-md">
                                            <img src={avatar} className="img-md rounded-circle border" alt="Hình đại diện người dùng" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            {/* ========================= KẾT THÚC PHẦN NỘI DUNG ========================= */}
        </>
    );
};

export default Setting;
