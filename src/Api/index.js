import api from './axiosCreate'

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

const userUpdate = async ({ data, token, photo }) => {
    return (
        await api.put(`user/profile`, data, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                profile_photo: photo
            }
        })
    )
}

export {
    userRegister,
    getUsers,
    userUpdate
}