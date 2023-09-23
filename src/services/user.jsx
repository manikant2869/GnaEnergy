import utils from "../utils/utils"
export default {
    async add(data){
        return utils.sendApiRequest("/user/signup","POST",false,data)
        .then((response)=>{
            return response
        })
        .catch((error)=>{
            return error
        })
    },
    async loginVerify(data){
        return utils.sendApiRequest("/user/login","POST",false,data)
        .then((response)=>{
            return response
        })
        .catch((error)=>{
            return error
        })
    }
}