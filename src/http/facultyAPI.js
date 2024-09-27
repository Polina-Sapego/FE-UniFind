import {$authHost, $host} from "./index";

export const createUniversity = async (university) => {
    const {data} = await $authHost.post('catalog', university)
    return data
}
export const createSpecialization = async (university) => {
    const {data} = await $authHost.post('speciality', university)
    return data
}


export const fetchUniversity = async () => {
    const {data} = await $authHost.get('catalog')
    return data
}

export const fetchFaculty = async () => {
    const {data} = await $authHost.get('faculty')
    return data
}

export const createFaculty = async (faculty) => {
    const {data} = await $authHost.post('faculty', faculty)
    return data
}

export const fetchOneUniversity = async (id) => {
    const {data} = await $authHost.get('catalog/' + id)
    console.log(id)
    return data
}

export const fetchSpeciality = async () => {
    const {data} = await $authHost.get('speciality')
    return data
}

export const fetchOneFaculty = async (id) => {
    const {data} = await $authHost.get('faculty/' + id)
    console.log(id)
    return data
}
