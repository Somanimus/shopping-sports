import axios from "axios";
import { API_URL } from "../../https";
import * as types from "../actionTypes/categoriesTypes";

const getCotegoriesSuccess = (categories) => ({
    type: types.GET_COTEGORIES,
    categories,
});
const errorCotegories = (error) => ({ type: types.ERROR_COTEGORIES, error });

export const getCotegories = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API_URL}/categories/`);
            dispatch(getCotegoriesSuccess(res.data));
        } catch (e) {
            dispatch(errorCotegories(e));
        }
    };
};

const getCategoresDetailSuccess = (categoriesDetail) => ({
    type: types.GET_CATEGORIES_DETAIL,
    categoriesDetail,
});
const errorCotegoriesDetail = (error) => ({
    type: types.ERROR_CATEGORIES_DETAIL,
    error,
});

export const getCategoriesDetail = (id) => {
    console.log(id);
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API_URL}/categories/${id}/`);
            dispatch(getCategoresDetailSuccess(res.data));
        } catch (e) {
            console.log(e);
            dispatch(errorCotegoriesDetail(e));
        }
    };
};
