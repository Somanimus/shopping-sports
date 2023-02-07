import axios from "axios"
import { API_URL } from "../../https"
import * as types from "../actionTypes/orderTypes"

const getOrderSuccess = (order) => ({ type: types.GET_ORDER, order })
const errorOrder = (error) => ({ type: types.ERROR_ORDER, error }) 

export const getOrder = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${API_URL}/order/`)
            dispatch(getOrderSuccess(res.data))
        }catch(e) {
            dispatch(errorOrder(e))
        }
    }
}