import axios from 'axios';

export const createCategory = (data) => {
    return {
        type: "CREATE_CATEGORY",
        payload: axios({
            method: "POST",
            url: "http://localhost:3004/api/category",
            data: data
        })
    }
}

export const readCategory = () => {
    return {
        type: "READ_CATEGORY",
        payload: axios({
            method: "GET",
            url: "http://localhost:3004/api/category"
        })
    }
}

