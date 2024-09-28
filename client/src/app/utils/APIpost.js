import axios from "axios";
import { addLabRoute, getDataRoute, issueRoute,refreshTokenRoute } from "./APIroutes";
const api = axios.create({
    baseURL: "http://localhost:3000 ",
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const issuePost=(data)=>api.post(issueRoute,data);  
export const addLabPost=(data)=>api.post(addLabRoute,data);
export const getLabPost=(data)=>api.post(getDataRoute,data);

api.interceptors.response.use(
    (config)=>{
        return config;
    },
    async(error)=>{
        const originalRequest = error.config;
        if(
            error.response.status === 405 &&
            originalRequest &&
            !originalRequest._isRetry
        ){
            originalRequest._isRetry=true;
            try {
                await axios.post(
                    refreshTokenRoute,{},
                    {
                        withCredentials: true,
                    }
                );

                return api.request(originalRequest);
            } catch (error) {
                console.log(error.msg);
            }
        }
        throw error;
    }
)

export default api;