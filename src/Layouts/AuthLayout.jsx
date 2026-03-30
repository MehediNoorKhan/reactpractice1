import React from 'react'
import Logo from '../Pages/Shared/Logo'
import authpicture from "../../assets/authImage.png"
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div>
    <div className='flex'>
     <div className='bg-white flex-1 px-[53px] py-[44px]'>
     <Logo/>
     <div className='flex min-h-screen justify-center items-center'>
<Outlet/>
     </div>
    </div>
  
    <div className='bg-[#FAFDF0]  flex-1 px-[53px] py-[44px] min-h-screen flex justify-center items-center'>
    <div>
    <img src={authpicture} alt="auth" className='object-cover'/>
    </div>

    </div>
    </div>
   
   
    </div>
  )
}
