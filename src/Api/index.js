import api from './axiosCreate'
const apiUrl = 'http://178.159.39.106/api/v1/'

const userRegister = async ({ data }) => {
    return (
        await api.post('user/register/', data)
    )
}

const getUsers = async ({ token }) => {
    return (
        await api.get('user/profile/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    )
}

const userLogin = async ({ data }) => {
    return (
        await api.post('user/login/', data)
    )
}

export {
    userRegister,
    getUsers,
    userLogin,
    apiUrl
}