const initialState = {
    products: [],
    paginates: []
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
            return {
                ...state,
                products: action.payload.data.result
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
            // const page = state.paginates.map(pagination => {
            //     if (pagination === action.payload.data.amount) {
            //         return action.payload.data.result;
            //     }
            //     return pagination;
            // })
            // const page = action.payload.data.amount
            // const page = state.products.filter(pagination => pagination !== action.payload.data.amount);
            return {
                ...state,
                products: action.payload.data.result,
                paginates: action.payload.data.amount
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
            return {
                ...state,
                products: action.payload.data.result
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
            return {
                ...state,
                products: action.payload.data.result
            }

        case 'DETAIL_PRODUCT_PENDING':
            return {
                ...state
            }
        case 'DETAIL_PRODUCT_REJECTED':
            return {
                ...state
            }
        case 'DETAIL_PRODUCT_FULFILLED':
            return {
                ...state,
                products: action.payload.data.result
            }

        default:
            return state;
    }
}

export default product;