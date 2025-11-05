import axios, { Axios } from "axios";
import useAuthHook from "./AuthHooks";
import { use, useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://smartdeals-api-server.vercel.app/",
});
const useSecureInstance = () => {
  const { user,Logout } = useAuthHook();
  const navigate=useNavigate()
  useEffect(() => {
    const interceptor = instance.interceptors.request.use((config) => {
     if(user?.accessToken){
         config.headers.authorization = `Bearar ${user?.accessToken}`;
     }
      console.log(config);
      return config;
    });
  const responseInterceptor=  instance.interceptors.response.use(res=>{
    return res
    },err=>{
        console.log('erron of ',err.status)
        if(err.status===401||err.status===403){
            Logout()
            navigate('/register')
        }
      return 
      
    })

    // on unmoutn
    return()=> {
        instance.interceptors.request.eject(interceptor)
        instance.interceptors.response.eject(responseInterceptor)
    }
  }, [user,navigate,Logout]);
  return instance;
};
export default useSecureInstance;
