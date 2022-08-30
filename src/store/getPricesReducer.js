const defaultState = {
    prices: []
}

const ADD_MANY_PRICES = "ADD_MANY_PRICES"

export const pricesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_PRICES:
            return {...state, prices: action.payload}
        default:
            return state
    }
}

export const addManyPricesAction = (payload) => ({type: ADD_MANY_PRICES, payload})