import React, { useState, useEffect } from 'react';
import { GET_ORDER, GET_EMAIL, POST_ADD } from '../../api/Service';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [user, setUser] = useState({});
    const [order, setOrder] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('CartId');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!email) {
                    throw new Error('No email found in localStorage');
                }

                const [userResponse, orderResponse] = await Promise.all([
                    GET_EMAIL('users', email),
                    GET_ORDER('users', email)
                ]);

                setUser(userResponse);
                setOrder(orderResponse);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [email]);

    const handlePayment = (email, id, paymentMethod) => {
        if (!paymentMethod) {
            toast.error("Vui lòng chọn phương thức thanh toán", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const url = `/users/${email}/carts/${id}/payments/${paymentMethod}/order`;
        POST_ADD(url)
            .then(response => {
                toast.success("Thanh toán thành công", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                localStorage.setItem('CartLength', 0);
                navigate("/cart");

            })
            .catch(error => {
                console.error('Payment error:', error);
                toast.error("Thanh toán thất bại", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="section-content padding-y">
            <div className="container" style={{ maxWidth: '720px' }}>
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title mb-3">Thông tin giao hàng</h4>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" value={user.email || ''} readOnly />
                            </div>
                            <div className="col form-group">
                                <label>Điện thoại</label>
                                <input type="text" className="form-control" value={user.mobileNumber || ''} readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Quốc gia</label>
                                <input type="text" className="form-control" value={user.address?.country || ''} readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Thành phố</label>
                                <input type="text" className="form-control" value={user.address?.city || ''} readOnly />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <textarea className="form-control" rows="2" value={user.address?.street || ''} readOnly></textarea>
                        </div>
                    </div>
                </div>

                <div className="card ">
                    <div className="card-body col-md-12">
                        <h4 className="card-title">Thanh toán</h4>
                        <form role="form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="paymentMethod">Phương thức thanh toán</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="paymentMethod"
                                        placeholder="VD: Momo"
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                className="subscribe btn btn-primary btn-block"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePayment(email, id, paymentMethod);
                                }}
                            >
                                Xác nhận
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
