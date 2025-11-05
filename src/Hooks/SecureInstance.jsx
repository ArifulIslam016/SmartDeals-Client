import axios, { Axios } from "axios";
import useAuthHook from "./AuthHooks";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});
const useSecureInstance = () => {
  const { user } = useAuthHook();
  useEffect(() => {
    const interceptor = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearar ${user?.accessToken}`;
      console.log(config);
      return config;
    });
  }, []);
  return instance;
};
export default useSecureInstance;
