import React, { useEffect, useState } from 'react'
import { AuthContext } from './authContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../firebase/firebase.init'

export default function AuthProviders({children}) {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  const createUser = (email, password) => {
   setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password)

  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])


const authInfo ={
  user,
  loading,
createUser,
signInUser,
logOut
}

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}
