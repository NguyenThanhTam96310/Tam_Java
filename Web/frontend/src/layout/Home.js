import React from 'react'
import Slider from '../pages/home/Slider'
import Deal from '../pages/home/Deal'
import Apparel from '../pages/home/Apparel'
import Electronics from '../pages/home/Electronics'
import Request from '../pages/home/Request'
import Item from '../pages/home/Item'
import Services from '../pages/home/Services'
import Region from '../pages/home/Region'


const Home = (props) => {
  return (
    <div className='container'>

      <Slider />
      {/* <Deal />
      <Apparel />
      <Electronics />
      <Request /> */}
      <Item />
      <Services />
      {/* <Region /> */}
    </div>
  )
}

export default Home