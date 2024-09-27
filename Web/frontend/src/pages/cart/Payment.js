import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GET_ID } from '../../api/Service';
import i1 from "../../assets/images/items/1.jpg";
import i2 from "../../assets/images/items/2.jpg";
import i3 from "../../assets/images/items/3.jpg";

const Payment = () => {
    return (
        <section className="section-content padding-y">
            <div className="container" style={{ maxWidth: '720px' }}>

                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title mb-3">Delivery info</h4>

                        <div class="form-row">
                            <div class="form-group col-sm-6">
                                <label class="js-check box active">
                                    <input type="radio" name="dostavka" value="option1" checked />
                                    <h6 class="title">Standart delivery</h6>
                                    <p class="text-muted">Free by airline within 20 days</p>
                                </label>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="js-check box">
                                    <input type="radio" name="dostavka" value="option1" />
                                    <h6 class="title">Fast delivery</h6>
                                    <p class="text-muted">Extra 20$ will be charged </p>
                                </label>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="" />
                            </div>
                            <div className="col form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="" />
                            </div>
                            <div className="col form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" placeholder="" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Country</label>
                                <select id="inputState" className="form-control">
                                    <option>Choose...</option>
                                    <option>Uzbekistan</option>
                                    <option>Russia</option>
                                    <option selected>United States</option>
                                    <option>India</option>
                                    <option>Afghanistan</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label>City</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea className="form-control" rows="2"></textarea>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Payment</h4>
                        <form role="form" style={{ maxWidth: '380px' }}>
                            <div className="form-group">
                                <label htmlFor="username">Name on card</label>
                                <input type="text" className="form-control" name="username" placeholder="Ex. John Smith" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cardNumber">Card number</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" name="cardNumber" placeholder="" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp;
                                            <i className="fab fa-cc-mastercard"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md flex-grow-0">
                                    <div className="form-group">
                                        <label className="hidden-xs">Expiration</label>
                                        <div className="form-inline" style={{ minWidth: '220px' }}>
                                            <select className="form-control" style={{ width: '100px' }}>
                                                <option>MM</option>
                                                <option>01 - January</option>
                                                <option>02 - February</option>
                                                <option>03 - March</option>
                                            </select>
                                            <span style={{ width: '20px', textAlign: 'center' }}> / </span>
                                            <select className="form-control" style={{ width: '100px' }}>
                                                <option>YY</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label data-toggle="tooltip" title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                                        <input className="form-control" required type="text" />
                                    </div>
                                </div>
                            </div>
                            <button className="subscribe btn btn-primary btn-block" type="button"> Confirm </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
