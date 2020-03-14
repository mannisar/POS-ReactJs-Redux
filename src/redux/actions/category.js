import axios from 'axios';
require('dotenv').config()

export const createCategory = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "CREATE_CATEGORY",
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}category`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const readCategory = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "READ_CATEGORY",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}category`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const updateCategory = (categoryId, data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'UPDATE_CATEGORY',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}category/${categoryId}`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const deleteCategory = (categoryId) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL}category/${categoryId}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const searchCategory = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'SEARCH_CATEGORY',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}category/${data}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}
