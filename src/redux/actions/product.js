import axios from 'axios';

export const createProduct = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'CREATE_PRODUCT',
        payload: axios({
            method: "POST",
            url: "http://localhost:3004/api/product",
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const readProduct = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'READ_PRODUCT',
        payload: axios({
            method: "GET",
            url: "http://localhost:3004/api/product",
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const updateProduct = (productId, data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: "PATCH",
            url: `http://localhost:3004/api/product/${productId}`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const deleteProduct = (productId) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: "DELETE",
            url: `http://localhost:3004/api/product/${productId}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const filterProduct = (category, search) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'FILTER_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:3004/api/product/?category=${category}&search=${search}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}