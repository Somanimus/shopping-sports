import axios from "axios"
import { API_URL } from "../../https"
import * as types from "../actionTypes/productTypes"

const getProductsSuccess = (products) => ({ type: types.GET_PRODUCTS, products })
const getProductsNew = (productsNew) => ({ type: types.GET_PRODUCTS_NEW, productsNew })
const getProductsHit = (productsHit) => ({ type: types.GET_PRODUCTS_HIT, productsHit })
const errorProducts = (error) => ({ type: types.ERROR_PRODUCTS, error })
const productsSearch = (productsSearch) => ({ type: types.PRODUCTS_SEARCH, productsSearch })
const searchValue = (searchValue) => ({ type: types.SEARCH_VALUES, searchValue })
export const productsNewCount = (count) => ({ type: types.PRODUCTS_NEW_COUNT, count })
export const productsLastCountSuccess = (count) => ({ type: types.PRODUCTS_LAST_COUNT, count })
const getProductsDetailSuccess = (payload) => ({ type: types.GET_PRODUCTS_DETAIL, payload })

export const getProducts = (is_new, hit, countProducts, search) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                `${API_URL}/products?${is_new ? 'is_new=true' : ''}${hit ? 'hit=true' : ''}&${countProducts ? `limit=${countProducts}` : ""}${search ? `&search=${search}` : ""}`)
            if (is_new) {
                dispatch(getProductsNew(res.data))
            }else if(hit) {
                dispatch(getProductsHit(res.data))
            }else if(search) {
                dispatch(productsSearch(res.data))
                dispatch(searchValue(search))
            } else {
                dispatch(getProductsSuccess(res.data))
            }
        } catch(e) {
            dispatch(errorProducts(e))
        }
    }
}

export const getProductsDetail = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/products/${id}`)
        dispatch(getProductsDetailSuccess(res.data))
    } catch (e) {
        console.log(e);
    }
}