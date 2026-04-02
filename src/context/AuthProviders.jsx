import React, { useEffect, useState } from 'react'
import { AuthContext } from './authContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../firebase/firebase.init'


const provider = new GoogleAuthProvider();

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

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
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
logOut,
signInWithGoogle
}

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}
