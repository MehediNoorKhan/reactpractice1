import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router';

export default function PrivateRoute({children}) {

    const {user, loading}= useAuth();

if(loading){
    return <span className='loading loading-spinner loading-xl'></span>
}

if(!user){
    return <Navigate to ="/login" replace></Navigate>
}


  return children;
}
