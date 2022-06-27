import * as types from "../actionTypes/basketTypes"

const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_BASKET:
            return { ...state, basket: action.payload }
        default:
            return state
    }
}