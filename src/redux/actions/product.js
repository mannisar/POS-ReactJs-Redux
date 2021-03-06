import axios from 'axios';

export const createProduct = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'CREATE_PRODUCT',
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}product`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const readProduct = (category, product, by, paginateId) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    if (category !== undefined || product !== undefined || by !== undefined) {
        return {
            type: 'READ_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${process.env.REACT_APP_URL}product/?category=${category}&product=${product}&sortBy=${by}`,
                headers: {
                    "authorization": authorization,
                    "user-id": userId
                }
            })
        }
    } else if (paginateId !== undefined) {
        return {
            type: 'READ_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${process.env.REACT_APP_URL}product/?&paginateId=${paginateId}`,
                headers: {
                    "authorization": authorization,
                    "user-id": userId
                }
            })
        }
    } else {
        return {
            type: 'READ_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${process.env.REACT_APP_URL}product`,
                headers: {
                    "authorization": authorization,
                    "user-id": userId
                }
            })
        }
    }
}

export const updateProduct = (productId, data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}product/${productId}`,
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
            url: `${process.env.REACT_APP_URL}product/${productId}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const detailProduct = (id) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'DETAIL_PRODUCT',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}product${id}`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}