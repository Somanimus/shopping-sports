import * as types from "../actionTypes/sharesTypes"

const initialState = {
    shares: [],
    error: ""
}

export const sharesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SHARES:
            return {...state, shares: action.payload}
        case types.GET_SHARES_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}