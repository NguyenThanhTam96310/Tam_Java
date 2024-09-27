import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGOUT, GET_ALL } from "../api/Service";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    LOGOUT();
    navigate('/Login');
  }

  return (
    <header className="section-header">
      <nav className="navbar d-none d-md-flex p-md-0 navbar-expand-sm navbar-light border-bottom">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTop4">
            <ul className="navbar-nav mr-auto">
              <li>
                <span className="nav-link">
                  Xin chào, <Link to={"/Login"} className="text-decoration-none">Đăng nhập</Link> hoặc <Link to={"/Register"} className="text-decoration-none">Đăng ký</Link>
                </span>
              </li>
              <li><Link to={"/deals"} className="nav-link text-decoration-none">Ưu đãi</Link></li>
              <li><Link to={"/sell"} className="nav-link text-decoration-none">Bán hàng</Link></li>
              <li><Link to={"/help"} className="nav-link text-decoration-none">Trợ giúp</Link></li>
            </ul>
            <ul className="navbar-nav">
              <li><Link to={"/ship"} className="nav-link text-decoration-none"> <img src={require("../assets/images/icons/flags/US.png")} height="16" alt='' /> Giao hàng tới </Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-decoration-none" href="/Watchlist" role="button" data-bs-toggle="dropdown" aria-expanded="false">Danh sách theo dõi</a>
                <ul className="dropdown-menu small">
                  <li><Link className="dropdown-item text-decoration-none" to="/first-item">Mục đầu tiên</Link></li>
                  <li><Link className="dropdown-item text-decoration-none" to="/second-item">Mục thứ hai</Link></li>
                  <li><Link className="dropdown-item text-decoration-none" to="/third-item">Mục thứ ba</Link></li>
                </ul>
              </li>
              <li><Link to={"/shop"} className="nav-link text-decoration-none">Cửa hàng của tôi</Link></li>
              <li><Link to={"/notification"} className="nav-link text-decoration-none"><i className="fa fa-bell"></i></Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <section className="header-main border-bottom">
          <div className="row row-sm">
            <div className="col-6 col-sm col-md col-lg flex-grow-0 pt-3">
              <Link to={"/"} className="brand-wrap">
                <img className="logo" src={require("../assets/images/logo.png")} alt='' />
              </Link>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6 pt-2">
              <form action="#" className="search-header">
                <div className="input-group w-100">
                  <select className="custom-select border-right" name="category_name">
                    <option value="">Tất cả loại</option>
                    <option value="codex">Đặc biệt</option>
                    <option value="comments">Chỉ tốt nhất</option>
                    <option value="content">Mới nhất</option>
                  </select>
                  <input type="text" className="form-control" placeholder="Tìm kiếm" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-warning" type="submit">
                      <i className="fa fa-search"></i> Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right d-flex align-items-center">
                <div className="widget-header mr-3">
                  <a href="/Myprofile" className="widget-view text-decoration-none">
                    <div className="icon-area">
                      <i className="fa fa-user"></i>
                      <span className="notify">3</span>
                    </div>
                    <small className="text"> Hồ sơ của tôi </small>
                  </a>
                </div>
                <div className="widget-header mr-3">
                  <a href="/order" className="widget-view text-decoration-none">
                    <div className="icon-area">
                      <i className="fa fa-store"></i>
                    </div>
                    <small className="text"> Đơn hàng </small>
                  </a>
                </div>
                <div className="widget-header mr-3">
                  <a href="/cart" className="widget-view text-decoration-none">
                    <div className="icon-area">
                      <i className="fa fa-shopping-cart"></i>
                    </div>
                    <small className="text"> Giỏ hàng </small>
                  </a>
                </div>
                <div className="widget-header">
                  <a onClick={handleLogout} className="widget-view text-decoration-none" style={{ cursor: 'pointer' }}>
                    <div className="icon-area">
                      <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <small className="text"> Đăng xuất </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
