import * as types from "../actionTypes/goodCreaditTypes"
import axios from "axios";
import {API_URL} from "../../https";

const getGoodCreditSuccess = (payload) => ({type: types.GET_GOOD_CREDIT, payload})
const getGoodCreditError = (payload) => ({type: types.GET_GOOD_CREDIT_ERROR, payload})

export const getGoodCredit = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/good_creadit/`)
        dispatch(getGoodCreditSuccess(res.data))
    }catch (e) {
        dispatch(getGoodCreditError(e))
    }
}