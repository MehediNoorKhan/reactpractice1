import React from 'react'
import Banner from './Banner'
import OurServices from './OurServices'
import Brands from './Brands'
import WhyChooseUs from './WhyChooseUs'

export default function Home() {
  return (
    <div className='bg-base-100'>
      <Banner/>
      <OurServices/>
      <Brands/>
      <WhyChooseUs/>
    </div>
  )
}
