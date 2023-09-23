
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
          const data = await fetch("http://localhost:3001"+ url,options).then(res => res.json());
          return data
        }catch(err){
           throw new Error(err)
        }
    }
}