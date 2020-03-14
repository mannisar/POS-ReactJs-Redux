import axios from 'axios';

export const createUser = (data) => {
    return {
        type: "CREATE_USER",
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}user`,
            data: data
        })
    }
}

export const readUser = () => {
    return {
        type: 'READ_USER',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL}user`
        })
    }
}

export const updateUser = (userId, data) => {
    return {
        type: 'UPDATE_USER',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}user/${userId}`,
            data: data
        })
    }
}

export const deleteUser = (userId) => {
    return {
        type: 'DELETE_USER',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL}user/${userId}`
        })
    }
}