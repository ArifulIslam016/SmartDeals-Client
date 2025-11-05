import axios from "axios";

const inastance=axios.create({
    baseURL:'http://localhost:3000'
})

const useAxiosInstance=()=>{
    return inastance
}
export default useAxiosInstance;