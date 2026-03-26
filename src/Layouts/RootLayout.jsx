import React from 'react'
import Navbar from '../Pages/Shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer'

export default function RootLayout() {
  return (
    <div>
      <Navbar />
       <Outlet />   
      <Footer/>
    </div>
  )
}
