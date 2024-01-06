import {serverUrl} from "./serverUrl"
import { commonApi } from "./commonApi"

export const uploadVideo = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

export const getAllvideos =async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

export const deleteVideo = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

export const addtohistory = async(videoDetails)=>{
    return await commonApi('POST',`${serverUrl}/history`,videoDetails)
}

export const getAllwatchhistory = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

export const deletewatchhistory = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

export const addcategory = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

export const getAllcategory = async()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}

export const deletecategory =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}