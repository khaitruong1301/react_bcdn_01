import axios from "axios";

export const domain = 'http://movieapi.cyberlearn.vn';

//Cấu hình interceptor (cấu hình sẵn những tham số mặc định cho tất cả api)
export const http = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn',
    timeout: 30000
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg2ODQ4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODgzMjQwMH0.x2aYBurEV6HW_u5m4Fhmr7bbp60q1hcW3_KcQ6nrySI'
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})


