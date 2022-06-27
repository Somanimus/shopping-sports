import * as types from "../actionTypes/productTypes"

const initialState = {
    products: [],
    productsNew: [],
    productsHit: [],
    productsSearch: [],
    productsDetail: [],
    searchValue: "",
    productsNewCount: 4,
    productsLastCount: 6,
    loading: false,
    error: ""
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return {...state, products: action.products }
        case types.GET_PRODUCTS_NEW:
            return {...state, productsNew: action.productsNew }
        case types.GET_PRODUCTS_HIT:
            return {...state, productsHit: action.productsHit }
        case types.PRODUCTS_NEW_COUNT:
            return {...state, productsNewCount: state.productsNewCount + action.count }
        case types.PRODUCTS_LAST_COUNT:
            return {...state, productsLastCount: state.productsLastCount + action.count }
        case types.PRODUCTS_SEARCH:
            return {...state, productsSearch: action.productsSearch }
        case types.SEARCH_VALUES:
            return {...state, searchValue: action.searchValue }
        case types.GET_PRODUCTS_DETAIL:
            return {...state, productsDetail: action.payload }
        default:
            return state
    }
}