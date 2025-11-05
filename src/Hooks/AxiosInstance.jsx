import axios from "axios";

const inastance=axios.create({
    baseURL:'https://smartdeals-api-server.vercel.app'
})

const useAxiosInstance=()=>{
    return inastance
}
export default useAxiosInstance;