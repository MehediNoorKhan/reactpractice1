import React from 'react'
import Banner from './Banner'
import OurServices from './OurServices'
import Brands from './Brands'
import WhyChooseUs from './WhyChooseUs'
import BeMarchent from './BeMarchent'
import CustomersSay from './CustomersSay'
import FAQ from './FAQ'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner/>
      <OurServices/>
      <Brands/>
      <WhyChooseUs/>
      <BeMarchent/>
      <CustomersSay/>
      <FAQ/>
    </div>
  )
}
