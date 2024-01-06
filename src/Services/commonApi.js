import axios from 'axios';

export const commonApi= async(httpMethod, url,body)=>{
    console.log("hiii",url)
    let reqConfig={

        method:httpMethod,
        url:url,
        data:body,
        Header:{
            "Content-Type":"application/json"
        }
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })

   

}






