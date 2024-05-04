import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createSpecial = async (speciality) => {
    const {data} = await $host.post('speciality', speciality)
    return data
}

export const fetchSpecial = async () => {
    const {data} =  await $host.get('speciality')
    
    return data
}