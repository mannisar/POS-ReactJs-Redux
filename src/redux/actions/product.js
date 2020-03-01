import axios from 'axios';


export const createProduct = (data) => {
    return {
        type: 'CREATE_PRODUCT',
        payload: axios({
            method: "POST",
            url: "http://localhost:3004/api/product",
            data: data
        })
    }
}

export const readProduct = () => {
    return {
        type: 'READ_PRODUCT',
        payload: axios({
            method: "GET",
            url: "http://localhost:3004/api/product"
        })
    }
}

export const updateProduct = (productId, data) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: "PATCH",
            url: `http://localhost:3004/api/product/${productId}`,
            data: data
        })
    }
}

// export const updateProduct = (productId, data) => {
//     return function (dispatch) {
//         return fetch(`http://localhost:3004/api/product/${productId}`, data)
//             .then(
//                 response => response.json(),
//                 error => console.log('An error occurred.', error)
//             )
//             .then(
//                 json => dispatch(updateProduct(json))
//             )
//     }
// }

// export const updateProduct = (productId, data) => {
//     return {
//         type: 'UPDATE_PRODUCT',
//         payload: axios({
//             method: "FETCH",
//             url: `http://localhost:3004/api/product/${productId}`,
//             data: data
//         })
//     }
// }

// export const updateProduct = (productId, data) => {
//     return {
//         type: 'UPDATE_PRODUCT',
//         payload: axios({
//             // method: "PATCH",
//             // url: fetch(`http://localhost:3004/api/product/${productId}`, data),
//             url: fetch(`http://localhost:3004/api/product/${productId}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             }, data)
//         })
//     }
// }

// export const updateProduct = (productId, data) => {
//     return fetch(`http://localhost:3004/api/product/${productId}`, data)
// }

// export const updateProduct = (productId, data) => {
//     return {
//         type: 'UPDATE_PRODUCT',
//         paylod: {
//             data: fetch(`http://localhost:3004/api/product/${productId}`, data)
//         }
//     }
// }

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: "DELETE",
            url: `http://localhost:3004/api/product/${productId}`
        })
    }
}

export const searchProduct = (data) => {
    return {
        type: 'SEARCH_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:3004/api/product/?search=${data}`
        })
    }
}