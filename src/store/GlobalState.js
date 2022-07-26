
import React, { useReducer } from "react";
import { ADD_TO_CART, CLEAR_ALL_FROM_CART, REMOVE_FROM_CART } from './types';
import Context from "./Context";
import Reducer from "./Reducer";


export default function GlobalState(props) {
    const products = [
     ];

    const [state, dispatch] = useReducer(Reducer, {carts: []} );
    
    const addProductToCart = (product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product,
        });
    };

    const removeProductFromCart = (productID )=> {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productID,
        });
    };


    const clearCart = () => {
        dispatch({
            type: CLEAR_ALL_FROM_CART,
        });
    };
    
    return(
        <Context.Provider 
        value={{
            products: products,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            clearCart: clearCart,
            carts: state.carts,
        }}
        >

        

        {props.children}
        </Context.Provider>
    );
}
