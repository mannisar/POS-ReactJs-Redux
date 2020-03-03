const initialState = {
    carts: []
    // addedCarts: [],
    // total: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'CART_FULFILLED':
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
}

export default cart;