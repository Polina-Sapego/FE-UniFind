import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (login, password) => {
    const {data} = await $host.post('signup', {login, password,  role: 'ADMIN'})
    localStorage.setItem('user', data)
    localStorage.setItem('token', data.token)
    return data
}

export const login = async (login, password) => {
    const {data} =  await $host.post('login', {login, password})
    console.log(data)
    localStorage.setItem('user', data)
    localStorage.setItem('token', data.token)
    console.log(localStorage.getItem('token'))
    return data
}


export const check = async () => {
    const {data} = await $authHost.post('signup',   )
    localStorage.setItem('user', data)
    localStorage.setItem('token', data.token)
    return data
}