import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { CreateContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

export const FilterContext = createContext();

//initial state of reducer
const initialState = {
    filter_products: [],
    all_products: [],
    sorting_value: "",
    filters: {
        text: "",
        category: "all",
        company: "all",
    },
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useContext(CreateContext);

    // For filter products
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    // handle dropdown of sorting
    const handleDropdown = (event) => {
        let value = event.target.value;
        dispatch({ type: "GET_SORT_VALUE" , payload:value })
    }
    // hook for sorting value
    useEffect(() => {
        dispatch({ type:"SORTING_PRODUCTS" , payload: products })
    }, [state.sorting_value])

    //For searching
    const updateFilters = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type: "UPDATE_FILTERS", payload: {name,value}});
    }

    useEffect(() => {
       dispatch({type: "UPDATE_FITER_PRODUCTS"})
    }, [state.filters])

    return (
        <FilterContext.Provider value={{ ...state, handleDropdown, updateFilters }}>
            {children}
        </FilterContext.Provider>
    )
}