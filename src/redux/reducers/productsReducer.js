import {ActionTypes} from "../contents/action-types";

// eslint-disable-next-line no-unused-vars
const initialState = {
    products: [{
        id:1,
        title:"T-shirt",
        category: "clothes",
    },
    ],
};
export const productsReducer = (state,action) => {
    switch (action.type) {
        case  ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}