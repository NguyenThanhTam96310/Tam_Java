import { GET_ID } from "../../api/Service";
import React, { useState, useEffect } from 'react';

const Address = () => {
    const [address, setAddress] = useState([]);
    const id = localStorage.getItem('CartId');

    useEffect(() => {
        if (id) {
            GET_ID('addresses', id)
                .then(response => {
                    setAddress(response);
                    console.log("===address", response)
                })
                .catch(error => {
                    console.error('Failed to fetch user data:', error);
                });
        } else {
            console.warn('No email found in localStorage.');
        }
    }, [id]);
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
                                        <h6>{address.city},{address.country}</h6>
                                        <p>Toà nhà:{address.buildingName} <br /> Căn hộ: {address.state}</p>
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
