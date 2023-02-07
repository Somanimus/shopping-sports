import axios from "axios"
import { API_URL } from "../../https"
import * as types from "../actionTypes/colorsTypes"

const getColorsSuccess = (colors) => ({ type: types.GET_COLORS, colors })
const errorColors = (error) => ({ type: types.ERROR_COLORS, error })

export const getColors = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API_URL}/colors/`)
            dispatch(getColorsSuccess(res.data))
        }catch(e) {
            dispatch(errorColors(e))
        }
    } 
}