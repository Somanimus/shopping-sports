import * as types from "../actionTypes/orderTypes"

const initialState = {
    order: [],
    loading: false,
    error: ""
}

export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ORDER:
            return { ...state, order: action.order }
        case types.ERROR_ORDER:
            return { ...state, error: action.error }
        default:
            return state
    }
}