import { createContext,useEffect,useReducer } from "react";
import reducer from "../Reducer/CartReducer";


export const CartContext = createContext();

const getLocalCartData = () => {
    try {
        let localCartData = localStorage.getItem('CartItems');
        if (!localCartData) {
            return [];
        }
        const parsedData = JSON.parse(localCartData);
        if (Array.isArray(parsedData)) {
            return parsedData;
        }
        return [];
    } 
    catch (error) {
        console.error("Error parsing localStorage data:", error);
        return []; 
    }
};

// state of reducer
const initialState = {
    cart: getLocalCartData(),
}

export const CartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const AddToCart = (id,tick,value,Product) => {
        dispatch({ type:"ADD_TO_CART" , payload:{id,tick,value,Product}})
    }
    
    //for removing items from cart
    const handleData = (data) => {
        dispatch({ type:"REMOVE_ITEM" , payload: data})
    }
    
    //localstorage
    useEffect(() => {
        localStorage.setItem('CartItems',JSON.stringify(state.cart))
    },[state.cart])

    // to remove all data from cart
    const removeAllData = () => {
        dispatch({ type:'REMOVE_DATA'})
    }

    //increment or decrement in cart
       const handleIncrement = (id)  => {
           dispatch({ type: "INCREMENT",payload: id})
        }

        const handleDecrement = (id)  => {
            dispatch({ type: "DECREMENT",payload: id})
        } 
    return (
        <CartContext.Provider value={{...state,AddToCart,handleData,removeAllData,handleIncrement,handleDecrement}}>
            {children}
        </CartContext.Provider>
    )

    
}