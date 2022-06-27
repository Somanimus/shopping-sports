import * as types from "../actionTypes/setsTypes"
const initialState = {
    sets: [],
    loading: false,
    error: ""
}

export const setsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_SETS:
            return { ...state, sets: action.sets }
        default:
            return state
    }
}