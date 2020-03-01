const initialState = {
    products: []
}

const product = (state = initialState, action) => {
    //console.log(action.type);
    switch (action.type) {
        case 'CREATE_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'CREATE_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'CREATE_PRODUCT_FULFILLED':
            const newData = [...state.products, action.payload.data.result]
            return {
                ...state,
                products: newData
            }

        case 'READ_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'READ_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'READ_PRODUCT_FULFILLED':
            return {
                ...state,
                products: action.payload.data.result
            }

        case 'UPDATE_PRODUCT_PENDING':
            return {
                ...state,
            }

        case 'UPDATE_PRODUCT_REJECTED':
            return {
                ...state,
            }

        case 'UPDATE_PRODUCT_FULFILLED':
            const newProdukfterUpdate = state.products.map(product => {
                if (product.id === action.payload.data.result.id) {
                    return action.payload.data.result;
                }
                return product;
            })
            return {
                ...state,
                products: newProdukfterUpdate
            }

        case 'DELETE_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'DELETE_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'DELETE_PRODUCT_FULFILLED':
            const newProdukAfterDelete = state.products.filter(product => product.id !== action.payload.data.result)
            return {
                ...state,
                products: newProdukAfterDelete
            }

        case 'SEARCH_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'SEARCH_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'SEARCH_PRODUCT_FULFILLED':
            return {
                ...state,
                products: action.payload.data.result
            }
        default:
            return state;
    }
}

export default product;