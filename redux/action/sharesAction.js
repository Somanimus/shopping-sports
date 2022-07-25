import * as types from "../actionTypes/sharesTypes"
import axios from "axios";
import {API_URL} from "../../https";

const getSharesSuccess = (payload) => ({type: types.GET_SHARES, payload})
const getSharesError = (payload) => ({type: types.GET_SHARES_ERROR, payload})

export const getShares = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/stock/`)
        dispatch(getSharesSuccess(res.data))
    }catch (e) {
        dispatch(getSharesError(e))
    }
}