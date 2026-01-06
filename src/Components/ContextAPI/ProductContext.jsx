import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

// create context
export const CreateContext = createContext();

const initialState = {
    isloading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct : {},
    isSingleError: false
}

// Provider component
export const Provider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  let url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=21";

// Get all products from api
     const getProducts = async (url) => {
       dispatch({type: "LOADING"});
       try {
          const response = await fetch(url);
          const data = await response.json();
          dispatch({type: "GET_PRODUCTS", payload: data})
       } 
       catch (error) {
          dispatch({type: "ERROR"});
       }
     }

// Getting single Product information from api
    const getSingleProduct = async (url) => {
       dispatch({type: "SINGLE_LOADING"});
        try {
            const response = await fetch(url);
            const singleProduct = await response.json();
            dispatch({type: "GET_SINGLE_PRODUCT", payload: singleProduct})
        } 
        catch (error) {
          dispatch({type: "SINGLE_ERROR"});
        }
    } 

    useEffect(() => {
        getProducts(url);
    },[])
    
    return(
        <CreateContext.Provider value={{...state,getSingleProduct}}>
            {children}
        </CreateContext.Provider>
    )
}
