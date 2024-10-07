import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Home';
import UserLogin from './UserLogin';
import ListingGrid from '../pages/Listinggrid/SectionContent';
import ProductDetail from '../pages/Listinggrid/ProductDetail';
import Cart from '../pages/cart/Cart';
import UserRegister from './UserRegister';
import Order from '../pages/profile/Order';
import MyProfile from '../pages/profile/MyProfile';
import Address from '../pages/profile/Address';
import Wishlist from '../pages/profile/Wishlist';
import MySelling from '../pages/profile/MySelling';
import Setting from '../pages/profile/Setting';
import Payment from '../pages/cart/Payment';
import Header from './Header';
import TopMenu from '../pages/menu/TopMenu';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/Login';
  return (
    <main>
      {!hideHeaderFooter && <Header />}
      {!hideHeaderFooter && <TopMenu />}
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/Login' element={<UserLogin />} />
        <Route path='/Register' element={<UserRegister />} />
        <Route path='/ListingGrid' element={<ListingGrid />} />
        <Route path='/Detail' element={<ProductDetail />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Address' element={<Address />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/MySelling' element={<MySelling />} />
        <Route path='/Setting' element={<Setting />} />
        <Route path='/Payment' element={<Payment />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </main>
  );
};

export default Main;
