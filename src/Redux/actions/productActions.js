import { ActionTypes } from "./actionTypes.js"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}


export const selectedProduct = (product) => {
    return{
        type : ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}


    // SET_PRODUCTS : 'SET_PRODUCTS',
    // SELECTED_PRODUCTS : 'SELECTED_PRODUCTS',
    // REMOVE_SELECTED_PRODUCTS : 'REMOVE_SELECTED_PRODUCTS'