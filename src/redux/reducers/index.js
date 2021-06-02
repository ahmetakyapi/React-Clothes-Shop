
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});
export default reducers;