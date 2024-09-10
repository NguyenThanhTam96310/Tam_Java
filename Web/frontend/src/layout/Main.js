import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import UserLogin from './UserLogin'
import ListingGrid from '../pages/Listinggrid/SectionContent'
import ProductDetail from '../pages/Listinggrid/ProductDetail'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' index element={<Home />} />
        {/* <Route path='/Detail' element={<DetailProduct />} /> */}
        <Route path='/Login' element={<UserLogin />} />
        {/* <Route path='/Register' element={<UserRegister/>}/> */}
        <Route path='/ListingGrid' element={<ListingGrid />} />
        <Route path='/Detail' element={<ProductDetail />} />
      </Routes>
    </main>
  )
}

export default Main