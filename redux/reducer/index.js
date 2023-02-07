import { combineReducers } from "redux";
import { cotegoriesReducer } from "./categoriesReducer";
import { colorsReducer } from "./colorsReducer";
import { fabricsReducer } from "./fabricsReducer";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productsReducer";
import { setsReducer } from "./setsReducer";
import { subCategoriesReducer } from "./subCategoriesReducer";
import {basketReducer} from "./basketReducer";
import {goodCreditReducer} from "./goodCreaditReducer";
import { sharesReducer } from "./sharesReducer";

const reducer = combineReducers({
    products: productReducer,
    sets: setsReducer,
    categories: cotegoriesReducer,
    subCategories: subCategoriesReducer,
    order: orderReducer,
    fabrics: fabricsReducer,
    colors: colorsReducer,
    basket: basketReducer,
    goodCredit: goodCreditReducer,
    shares: sharesReducer
})


export default reducer