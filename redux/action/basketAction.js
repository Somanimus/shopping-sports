import * as types from "../actionTypes/basketTypes"

const basket = (payload) => ({ type: types.ADD_BASKET, payload })

export const getLocalStorage = () => {
    const local = localStorage.getItem("product-basket")
    return local ? JSON.parse(local) : []
}

export const basketAction = () => (dispatch) => {
    const products = getLocalStorage()
    dispatch(basket(products))
}

export const addBasket = (id) => {
    try {
        let products = getLocalStorage()
        let index = products.indexOf(id)

        if(index === -1) {
            products.push(id)
        } else {
            products.splice(index, 1)
        }

        localStorage.setItem("product-basket", JSON.stringify(products))
    }catch (e) {
        console.log(e)
    }
}