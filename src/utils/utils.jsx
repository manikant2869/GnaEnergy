const baseurl = import.meta.env.VITE_APP_API_BASEURL

export default {
    async sendApiRequest(url,method,auth,body){
        const options = {
            method : method,
            body : JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },

        }
        try{
          const data = await fetch(REACT_APP_API_BASEURL+ url,options).then(res => res.json());
          return data
        }catch(err){
           throw new Error(err)
        }
    }
}
