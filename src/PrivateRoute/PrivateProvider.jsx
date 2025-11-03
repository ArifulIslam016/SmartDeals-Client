import React, { use } from 'react';
import { Authcontext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateProvider = ({children}) => {
    const {user,isLoading}=use(Authcontext);
    const location=useLocation()
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(user){
        return children
    }
   if(!user){
    return<>
    <Navigate state={location.pathname} to={'/login'}></Navigate>
    
    </>
   }
};

export default PrivateProvider;