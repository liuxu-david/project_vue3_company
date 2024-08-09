import request from "@/utils/request"

// 登录获取token接口
export const handleLoginInterface = (data) => {
    return request({
        url: "/login",
        method: "POST",
        data
    })
}

// 获取用户信息接口
export const getUserInfoInterface = () => {
    return request({
        url: "/user/info",
        method: "GET"
    })
}