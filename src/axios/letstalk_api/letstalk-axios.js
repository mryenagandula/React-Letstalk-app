import axios from "axios";
import { deleteToken, getToken } from "../../utils/token.service";

const BASE_URL= "https://letstalk-be.herokuapp.com/";

const axiosClient=  axios.create({
    baseURL: BASE_URL
})



export const setUpInterceptors= (navigate)=>{

    axiosClient.interceptors.request.use(req=>{
        const token = getToken();
        if(token){
            const tokenData= JSON.parse(token)
            req.headers['Authorization'] = `Bearer ${tokenData.token}`;
        }
        else{
            deleteToken();
            navigate('/login');
        }
        return req;
    })

    axiosClient.interceptors.response.use(
        res=>{
            if(res?.response?.status === 403){
                navigate('/forbidden');
            }
            if(res?.response?.status === 401){
                navigate('/login');
            }
            return res;
        },
        error=>{
            if (error.response.status === 404 || error.response.status === 401) {
                navigate('/login');
                console.log("error occuered in interceptor level" + error)
            }
            if (error.response.status === 403) {
                navigate('/forbidden');
                console.log("error occuered in interceptor level" + error)
            }
            throw error;
        }
    )
}

export default axiosClient;