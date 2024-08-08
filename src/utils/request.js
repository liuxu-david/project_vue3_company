import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5000",
    timeout:5000
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    // 全局注入token
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    err=>{
        return Promise.reject(err)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response => {
        const {code, data} = response.data;
        console.log(response);
        
        if(code === 200){
            return data;
        }else{
            return Promise.reject(new Error(response.message || "Error"))
        }
    },
    err => {
        return Promise.reject(new Error(err || "Error"))
    }
)

export default instance;