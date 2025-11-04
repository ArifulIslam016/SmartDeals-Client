import { use } from "react"
import { Authcontext } from "../Context/AuthContext"

const useAuthHook= ()=>{
    const userIfooo=use(Authcontext)
    return userIfooo
}
export default useAuthHook