import * as types from "../actionTypes/subCategoriesTypes"

const initialState = {
    subCategories: [],
    loading: false,
    error: ""
}

export const subCategoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_SUB_CATEGORIES:
            return { ...state, subCategories: action.subCategories }
        case types.ERROR_SUB_CATEGORIES:
            return { ...state, error: action.error }
        default: 
            return state
    }
}