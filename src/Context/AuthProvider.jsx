import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Authcontext } from './AuthContext';

const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [isLoading,setIsLoading]=useState(true)
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        setIsLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser=(email,password)=>{
         setIsLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const LoginWithGoogle=()=>{
      return  signInWithPopup(auth,googleProvider)
    }
    const Logout=()=>{
      return  signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            if(currentUser){
                fetch('https://smartdeals-api-server.vercel.app/token',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({email:currentUser.email})

                }).then(res=>res.json()).then()
            }
            setIsLoading(false)
        })
        return ()=>{
            unsubscribe
        }
    },[])
    const userInfo={
        createUser,
        LoginWithGoogle,
        LoginUser,
        isLoading,
        user,
        Logout

    }
    return (
        <Authcontext value={userInfo} >
           {children}
        </Authcontext>
    );
};

export default AuthProvider;