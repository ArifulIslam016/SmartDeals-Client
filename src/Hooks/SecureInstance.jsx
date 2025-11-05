import axios, { Axios } from "axios";
import useAuthHook from "./AuthHooks";
import { use, useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});
const useSecureInstance = () => {
  const { user,Logout } = useAuthHook();
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
      return 
      
    })

    // on unmoutn
    return()=> {
        instance.interceptors.request.eject(interceptor)
    }
  }, [user]);
  return instance;
};
export default useSecureInstance;
