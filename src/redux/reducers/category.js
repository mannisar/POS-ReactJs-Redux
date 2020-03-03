const initialState = {
    categorys: []
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CATEGORY_PENDING':
            return {
                ...state
            }
        case 'CREATE_CATEGORY_REJECTED':
            return {
                ...state
            }
        case 'CREATE_CATEGORY_FULFILLED':
            const newCategory = [...state.categorys, action.payload.data.result]
            return {
                ...state,
                categorys: newCategory
            }

        case 'READ_CATEGORY_PENDING':
            return {
                ...state
            }
        case 'READ_CATEGORY_REJECTED':
            return {
                ...state
            }
        case 'READ_CATEGORY_FULFILLED':
            return {
                ...state,
                categorys: action.payload.data.result
            }

        case 'UPDATE_CATEGORY_PENDING':
            return {
                ...state,
            }

        case 'UPDATE_CATEGORY_REJECTED':
            return {
                ...state,
            }

        case 'UPDATE_CATEGORY_FULFILLED':
            const newCategoryAfterUpdate = state.categorys.map(category => {
                if (category.id === action.payload.data.result.id) {
                    return action.payload.data.result;
                }
                return category;
            })
            return {
                ...state,
                categorys: newCategoryAfterUpdate
            }

        case 'DELETE_CATEGORY_PENDING':
            return {
                ...state
            }
        case 'DELETE_CATEGORY_REJECTED':
            return {
                ...state
            }
        case 'DELETE_CATEGORY_FULFILLED':
            const newCategoryAfterDelete = state.categorys.filter(category => category.id !== action.payload.data.result)
            return {
                ...state,
                categorys: newCategoryAfterDelete
            }

        case 'SEARCH_CATEGORY_PENDING':
            return {
                ...state
            }
        case 'SEARCH_CATEGORY_REJECTED':
            return {
                ...state
            }
        case 'SEARCH_CATEGORY_FULFILLED':
            return {
                ...state,
                categorys: action.payload.data.result
            }
        default:
            return state;
    }
}

export default category