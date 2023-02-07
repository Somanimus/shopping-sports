import axios from "axios"
import { API_URL } from "../../https"
import * as types from "../actionTypes/setsTypes"

const getSetsSuccess = (sets) => ({ type: types.GET_SETS, sets})
const errorSets = (error) => ({ type: types.ERROR_SETS, error})

export const getSets = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${API_URL}/sets/`)
            dispatch(getSetsSuccess(res.data))
        }catch(e) {
            dispatch(errorSets(e))
        }
    }
}