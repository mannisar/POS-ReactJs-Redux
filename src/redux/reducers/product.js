const initialState = {
    products: []
}

const product = (state = initialState, action) => {
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
            const newProduct = [...state.products, action.payload.data.result]
            return {
                ...state,
                products: newProduct
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
            const newProductAfterUpdate = state.products.map(product => {
                if (product.id === action.payload.data.result.id) {
                    return action.payload.data.result;
                }
                return product;
            })
            return {
                ...state,
                products: newProductAfterUpdate
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
            const newProductAfterDelete = state.products.filter(product => product.id !== action.payload.data.result)
            return {
                ...state,
                products: newProductAfterDelete
            }

        case 'FILTER_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'FILTER_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'FILTER_PRODUCT_FULFILLED':
            return {
                ...state,
                products: action.payload.data.result
            }
        default:
            return state;
    }
}

export default product;