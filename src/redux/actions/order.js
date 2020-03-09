import axios from 'axios'

export const orderCheckout = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "ORDER_CHECKOUT",
        payload: axios({
            method: "POST",
            url: 'http://localhost:3004/api/order',
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const readOrder = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "READ_ORDER",
        payload: axios({
            method: "GET",
            url: 'http://localhost:3004/api/history',
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}