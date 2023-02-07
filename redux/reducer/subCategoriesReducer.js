import * as types from "../actionTypes/subCategoriesTypes"

const initialState = {
    subCategories: [],
    subCategoriesDetail: [],
    loading: false,
    error: ""
}

export const subCategoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_SUB_CATEGORIES:
            return { ...state, subCategories: action.subCategories }
        case types.ERROR_SUB_CATEGORIES:
            return { ...state, error: action.error }
        case types.GET_SUB_CATEGORIES_DETAIL:
            return { ...state, subCategoriesDetail: action.payload }
        default: 
            return state
    }
}