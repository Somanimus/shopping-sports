import axios from "axios";
import { API_URL } from "../../https";
import * as types from "../actionTypes/subCategoriesTypes";

const getSubCotegoriesSuccess = (subCategories) => ({
    type: types.GET_SUB_CATEGORIES,
    subCategories,
});
const errorSubCotegories = (error) => ({
    type: types.ERROR_SUB_CATEGORIES,
    error,
});
const getSubCategoriesDetailSuccess = (payload) => ({type: types.GET_SUB_CATEGORIES_DETAIL, payload})

export const getSubCategories = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API_URL}/sub_categories/`);
            dispatch(getSubCotegoriesSuccess(res.data));
        } catch (e) {
            dispatch(errorSubCotegories(e));
        }
    };
};

export const getSubCategoriesDetail = id => async dispatch => {
    try{
        const res = await axios.get(`${API_URL}/sub_categories/${id}`)
        dispatch(getSubCategoriesDetailSuccess(res.data))
    }catch(e) {
        console.log(e)
    }
}