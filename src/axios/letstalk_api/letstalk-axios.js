import axios from "axios";
import { deleteToken, getToken } from "../../utils/token.service";

const BASE_URL= "https://letstalk-be.herokuapp.com/";

const axiosClient=  axios.create({
    baseURL: BASE_URL
})

axiosClient.interceptors.request.use(req=>{
    const token = getToken();
    if(token){
        const tokenData= JSON.parse(token)
        req.headers['Authorization'] = `Bearer ${tokenData.token}`;
    }
    else{
        deleteToken();
        window.location.href='/login'
    }
    return req;
})

axiosClient.interceptors.response.use(
    res=>{
        if(res?.response?.status === 403){
            window.location.href='/forbidden'
        }
        if(res?.response?.status === 401){
            window.location.href='/login'
        }
        return res;
    },
    error=>{
        console.log(error)
        if (error.response.status === 404 || error.response.status === 401) {
            window.location.href='/login'
            throw new Error(`${error.config.url} not found`);
        }
        if (error.response.status === 403) {
            window.location.href='/forbidden'
        }
        throw error;
    }
)

export default axiosClient;