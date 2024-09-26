import axios from "axios";

const $host = axios.create({ 
    baseURL: 'http://localhost:5555/'
})

const $authHost = axios.create({ 
    baseURL: 'http://localhost:5555/',
    maxContentLength: 50 * 1024 * 1024, // 50MB
    maxBodyLength: 50 * 1024 * 1024 // 50MB
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}

