import {$authHost, $host} from "./index";

// export const CreateFaculty = async (name, university_id) => {
//     const {data} = await $host.post('faculty', {name, university_id})
//     return data
// }

// export const createType = async (type) => {
//     const {data} = await $authHost.post('api/type', type)
//     return data
// }
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

// export const createBrand = async (brand) => {
//     const {data} = await $authHost.get('api/brand', brand)
//     return data
// }

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

// export const fetchUnivercity_specialties = async () => {
//     const {data} = await $authHost.get('speciality')
//     return data
// }

export const fetchOneFaculty = async (id) => {
    const {data} = await $authHost.get('faculty/' + id)
    console.log(id)
    return data
}

// export const createDevice = async (device) => {
//     const {data} = await $authHost.post('api/device', device)
//     return data
// }

// export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
//     const {data} = await $host.get('api/device', {params: {
//             typeId, brandId, page, limit
//         }})
//     return data
// }

// export const fetchOneDevice = async (id) => {
//     const {data} = await $host.get('api/device/' + id)
//     return data
// }
// export const registration = async (login, password) => {
//     const {data} = await $host.post('signup', {login, password,  role: 'ADMIN'})
//     localStorage.setItem('user', data)
//     localStorage.setItem('token', data.token)
//     // return jwt_decode(data.token)
//     return data
// }

// export const login = async (login, password) => {
//     const {data} =  await $host.post('login', {login, password})
//     console.log(data)
//     localStorage.setItem('user', data)
//     localStorage.setItem('token', data.token)
//     // return jwtDecode(data.token)
//     return data
// }

// export const check = async () => {
//     const {data} = await $authHost.post('signup',   )
//     localStorage.setItem('user', data)
//     localStorage.setItem('token', data.token)
//     return data
// }