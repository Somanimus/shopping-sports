import * as types from "../actionTypes/categoriesTypes"

const initialState = {
    categories: [],
    categoriesDetail: {},
    errorCategoriesDetail: "",
    loading: false,
    error: ""
}

export const cotegoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_COTEGORIES:
            return { ...state, categories: action.categories }
        case types.ERROR_COTEGORIES:
            return { ...state, error: action.error }
        case types.GET_CATEGORIES_DETAIL:
            return { ...state, categoriesDetail: action.categoriesDetail }
        case types.ERROR_CATEGORIES_DETAIL:
            return { ...state, errorCategoriesDetail: action.errorCategoriesDetail }
        default: 
            return state
    }
}