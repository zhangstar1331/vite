import axios from 'axios'
import {Message, Msgbox} from 'element3'
import store from '@/store'

//创建axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

//请求拦截
service.interceptors.request.use(
    (config) => {
        //指定请求令牌
        if(store.getters.token){
            config.headers["X-Token"] = store.getters.token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
//响应拦截
service.interceptors.response.use(
    //通过判断状态码统一处理响应
    (response) => {
        const res = response.data
        if(res.code !== 200){
            Message.error({
                message: res.message || "Error",
                duration: 5 *1000
            })
            // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
            if(res.code === 50008 || res.code === 50012 || res.code === 50014){
                //重新登录
                Msgbox.confirm("您已登出，请重新登录", "确认", {
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(()=>{
                    store.dispatch("user/resetToken").then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(new Error(res.message || "Error"))
        }else{
            return res
        }
    },
    (error) => {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)


export default service