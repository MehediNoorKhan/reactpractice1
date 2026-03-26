import React from 'react'
import logo from '../../../assets/logo.png'
export default function Logo() {
  return (
    <div className='flex items-end'>
      <img src={logo} alt="Logo" />
      <h2 className='text-2xl font-extrabold -ml-4'>ZapShift</h2>
    </div>
  )
}
