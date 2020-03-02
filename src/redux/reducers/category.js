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
        default:
            return state;
    }
}

export default category