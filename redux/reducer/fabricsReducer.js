import * as types from "../actionTypes/fabricsTypes"

const initialState = {
    fabrics: [],
    loading: false,
    error: ""
}

export const fabricsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_FABRICS:
            return { ...state, fabrics: action.fabrics }
        case types.ERROR_FABRICS:
            return { ...state, error: action.error }
        default:
            return state
    }
}