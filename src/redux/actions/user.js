import axios from 'axios';

export const createUser = (data) => {
    return {
        type: "CREATE_USER",
        payload: axios({
            method: "POST",
            url: "http://localhost:3004/api/user",
            data: data
        })
    }
}

export const readUser = () => {
    return {
        type: 'READ_USER',
        payload: axios({
            method: 'GET',
            url: 'http://localhost:3004/api/user'
        })
    }
}

export const updateUser = (userId, data) => {
    return {
        type: 'UPDATE_USER',
        payload: axios({
            method: "PATCH",
            url: `http://localhost:3004/api/user/${userId}`,
            data: data
        })
    }
}

export const deleteUser = (userId) => {
    return {
        type: 'DELETE_USER',
        payload: axios({
            method: "DELETE",
            url: `http://localhost:3004/api/user/${userId}`
        })
    }
}