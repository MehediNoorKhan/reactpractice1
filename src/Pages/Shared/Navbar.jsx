import React from 'react'
import { NavLink } from 'react-router'
import Logo from './Logo'
import useAuth from '../../hooks/useAuth'

export default function Navbar() {

  const {user,loading,logOut}= useAuth();

  if(loading){
    return <span className='loading loading-spinner loading-xl'></span>
  }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

const logout = (event) => {
  event.preventDefault();
  logOut().then(() => {
  
}).catch((error) => {
  console.error('Error logging out:', error);
});
}

  return (
    <div className="navbar bg-white rounded-xl shadow-sm max-w-7xl mx-auto py-2 mb-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <Logo/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>                                           
  </div>     
  <div className="navbar-end">                                  
    {user ? (
      <div >
        <button onClick={logout} className="btn">Logout</button>
      </div>
    ) : (
      <div className="flex flex-col md:flex-row">
        <NavLink to="/login" className="btn btn-ghost">Login</NavLink>
        <NavLink to="/register" className="btn btn-primary ml-0 md:ml-2 mt-2 md:mt-0">Register</NavLink>
      </div>
    )}
  </div>
</div>
  )
}
