

const ProductReducer = (state,action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                isloading: true,
                isError: false,
            }
        case "GET_PRODUCTS":
            const featureProducts = action.payload.filter((product) => product.featured === true);
            return {
                ...state,
                isloading: false,
                isError: false,
                products: action.payload,
                featureProducts: featureProducts,
            }
        case "ERROR":
            return {
                ...state,
                isloading: false,
                isError: true,
            }
        case "SINGLE_LOADING":
            return{
                ...state,
                isSingleloading: true,
                isSingleError: false,
            }
        case "GET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleloading: false,
                isSingleError: false,
                singleProduct: action.payload,
            }
        case "SINGLE_ERROR":
            return{
                ...state,
                isSingleloading: false,
                isSingleError: true,
            }
        default:
            return state;
    }
}
export default ProductReducer
