import axios from 'axios';
import config from './config';
import Cookies from "js-cookie";
import router from '@/router'

export default function $axios(optios){
    return new Promise((resolve,reject)=>{
        const instance = axios.create({
            baseURL: config.baseUrl,
            headers: config.headers,
            timeout: config.timeout,
            withCredentials: config.withCredentials
        })
        //请求拦截器
        instance.interceptors.request.use(
            config=>{
                let token=Cookies.get('token')
                if(token){//发送请求携带token
                    config.headers.token=token
                }else{
                    router.push('/login')
                }
                return config
            },
            error=>{
                return Promise.reject(error)
            }
        )
        //response 响应拦截器
        instance.interceptors.response.use(
            response=>{
                return response.data
            },
            err=>{
                return Promise.reject(err)
            }
        )
        //请求处理
        instance(optios).then(res=>{
            resolve(res)
            return false
        }).catch(error=>{
            reject(error)
        })
    })
}
