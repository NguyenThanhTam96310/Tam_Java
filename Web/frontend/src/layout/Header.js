import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL } from "../api/Service"

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const params = {
      pageNumber: 0,
      pageSize: 5,
      sortBy: 'categoryId',
      sortOrder: 'asc',
    };
    GET_ALL('categories', params) // Pass the query parameters here
      .then(response => {

        // Assuming the response structure has the data inside 'data'
        setCategories(response.content); // Update the state with the fetched data 
      })
      .catch(error => {
        console.error('Failed to fetch categories:', error); // Handle any errors
      });
  }, []);


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
                <span className="nav-link">Hi, <Link to={"/Login"}> Sign in </Link> or <Link to={"/Register"}> Register </Link></span></li>
              <li><Link to={"/deals"} className="nav-link"> Deals </Link></li>
              <li><Link to={"/sell"} className="nav-link"> Sell </Link></li>
              <li><Link to={"/help"} className="nav-link"> Help </Link></li>
            </ul>
            <ul className="navbar-nav">
              <li><Link to={"/ship"} className="nav-link"> <img src={require("../assets/images/icons/flags/US.png")} height="16" alt='' /> Ship to </Link></li>
              <li className="nav-item dropdown">
                <Link to={"/watchlist"} className="nav-link dropdown-toggle" data-toggle="dropdown">   Watchlist </Link>
                <ul className="dropdown-menu small">
                  <li><Link className="dropdown-item" to={""}>First item</Link></li>
                </ul>
              </li>
              <li><Link to={"/shop"} className="nav-link"> My shop </Link></li>
              <li><Link to={"/notification"} className="nav-link"> <i className="fa fa-bell"></i> </Link></li>
              <li><Link to={"/cart"} className="nav-link"> <i className="fa fa-shopping-cart"></i> </Link></li>
            </ul>
            {/* <!-- list-inline //  --> */}
          </div>
          {/* <!-- navbar-collapse .// --> */}
        </div>
        {/* <!-- container //  --> */}
      </nav>

      <div className="container">
        <section className="header-main border-bottom">
          <div className="row row-sm">
            <div className="col-6 col-sm col-md col-lg  flex-grow-0">
              <Link to={"/"} className="brand-wrap">
                <img className="logo" src={require("../assets/images/logo.png")} alt='' />
              </Link>
              {/* <!-- brand-wrap.// --> */}
            </div>
            <div className="col-6 col-sm col-md col-lg flex-md-grow-0">

              {/* <!-- mobile-only --> */}
              <div className="d-md-none float-right">
                <a href="#" className="btn btn-light"> <i className="fa fa-bell"></i> </a>
                <a href="#" className="btn btn-light"> <i className="fa fa-user"></i> </a>
                <a href="#" className="btn btn-light"> <i className="fa fa-shopping-cart"></i> 2 </a>
              </div>
              {/* <!-- mobile-only //end  --> */}

              <div className="category-wrap d-none dropdown d-md-inline-block">
                <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">Shop by
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Machinery / Mechanical Parts / Tools </a>
                  <a className="dropdown-item" href="#">Consumer Electronics / Home Appliances </a>
                  <a className="dropdown-item" href="#">Auto / Transportation</a>
                  <a className="dropdown-item" href="#">Apparel / Textiles / Timepieces </a>
                  <a className="dropdown-item" href="#">Home &amp; Garden / Construction / Lights </a>
                  <a className="dropdown-item" href="#">Beauty &amp; Personal Care / Health </a>
                </div>
              </div>
              {/* <!-- category-wrap.// --> */}
            </div>
            {/* <!-- col.// --> */}
            <div className="col-lg-6 col-xl col-md-5 col-sm-12 flex-grow-1">
              <form action="#" className="search-header">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <select className="custom-select border-left" name="category_name">
                    <option value="">All type</option><option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                </div>
              </form>
              {/* <!-- search-wrap .end// --> */}
            </div>
            {/* <!-- col.// --> */}
            <div className="col col-lg col-md flex-grow-0">
              <button className="btn btn-block btn-primary" type="submit"> Search </button>
            </div>
            <div className="col col-lg col-md flex-grow-0">
              <button className="btn btn-block btn-light" type="submit"> Advanced </button>
            </div>
          </div>
          {/* <!-- row.// --> */}
        </section>
        {/* <!-- header-main .// --> */}


        <nav className="navbar navbar-main navbar-expand pl-0">
          <ul className="navbar-nav flex-wrap">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <button class="nav-link dropdown-toggle border-0 bg-transparent" style={{ outline: "none" }} type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Categories
              </button>
              <ul class="dropdown-menu">
                {categories.map((cat, index) => <li key={index}>
                  <Link to={`/ListingGrid?categoryId=${cat.categoryId}`} className='dropdown-item'>
                    {cat.categoryName}
                  </Link>
                </li>)}
                <li>
                  <Link to={'/ListingGrid'} className='dropdown-item'>Tất cả sản phẩm</Link>
                </li>

              </ul>

            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/electronic"}>Electronics</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/fashion"}>Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/beauty"}>Beauty</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/motors"}>Motors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sport"}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/gardening"}>Gardening</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/deal"}>Deals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/under"}>Under $10</Link>
            </li>
          </ul>
        </nav>
        {/* <!-- navbar-main  .// --> */}
      </div>
      {/* <!-- container.// --> */}
    </header>

  )
}

export default Header