import axios from "axios"
import { API_URL } from "../../https"
import * as types from "../actionTypes/fabricsTypes"

const getFabricsSuccess = (fabrics) => ({ type: types.GET_FABRICS, fabrics })
const errorFabrics = (error) => ({ type: types.ERROR_FABRICS, error })

export const getFabrics = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API_URL}/fabrics/`)
            dispatch(getFabricsSuccess(res.data))
        }catch(e) {
            dispatch(errorFabrics(e))
        }
    }
}