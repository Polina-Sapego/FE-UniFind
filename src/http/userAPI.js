import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (login, password) => {
    const {data} = await $host.post('signup', {login, password,  role: 'ADMIN'})
    localStorage.setItem('user', data)
    localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)
    return data
}

export const login = async (login, password) => {
    const {data} =  await $host.post('login', {login, password})
    console.log(data)
    localStorage.setItem('user', data)
    localStorage.setItem('token', data.token)
    // return jwtDecode(data.token)
    return data
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth' )
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

export const check = async () => {
    const {data} = await $authHost.post('signup',   )
    localStorage.setItem('user', data)
    localStorage.setItem('token', data.token)
    return data
}