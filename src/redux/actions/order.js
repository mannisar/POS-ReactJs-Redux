import axios from 'axios'

export const orderCheckout = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "ORDER_CHECKOUT",
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}order`,
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
            url: `${process.env.REACT_APP_URL}history`,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}