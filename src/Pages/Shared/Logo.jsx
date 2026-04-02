import React from 'react'
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router'
export default function Logo() {

  const navigate = useNavigate();

const navigation = () => {
navigate('/');
}

  return (
    <div className='flex items-end cursor-pointer' onClick={navigation}>
      <img src={logo} alt="Logo" />
      <h2 className='text-2xl font-extrabold -ml-4'>ZapShift</h2>
    </div>
  )
}
