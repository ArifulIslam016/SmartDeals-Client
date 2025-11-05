import axios, { Axios } from "axios";

const instance=axios.create({
    baseURL:"http://localhost:3000/"
})
const useSecureInstance=()=>{
    return instance
}
export default useSecureInstance;