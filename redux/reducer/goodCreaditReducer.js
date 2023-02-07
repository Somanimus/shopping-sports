import * as types from "../actionTypes/goodCreaditTypes"

const initialState = {
    goodCredit: [],
    error: ""
}

export const goodCreditReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_GOOD_CREDIT:
            return {...state, goodCreadit: action.payload}
        case types.GET_GOOD_CREDIT_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}