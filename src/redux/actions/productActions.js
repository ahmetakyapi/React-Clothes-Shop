import {ActionTypes} from "../contents/action-types";

export const setProducts = (products) => {
    return {
       productType: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
 };

export const selectedProducts = (product) => {
    return {
        productType: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};