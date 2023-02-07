import axios from "axios"
import { API_URL } from "../../https"
import * as types from "../actionTypes/colorsTypes"

const initialState = {
    colors: [],
    loading: false,
    error: ""
}

export const colorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_COLORS:
            return { ...state, colors: action.colors }
        case types.ERROR_COLORS:
            return { ...state, error: action.error }
        default:
            return state
    }
}