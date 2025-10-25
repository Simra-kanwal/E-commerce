const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            };
        // for sorting
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let newSortData;
            let copyProducts = [...action.payload]

            if(state.sorting_value === "lowest"){
                const sortingProducts = (a,b) => {
                        return a.price - b.price;
                }
                newSortData = copyProducts.sort(sortingProducts)
            }

            if(state.sorting_value === "highest"){
                const sortingProducts = (a,b) => {
                        return b.price - a.price;
                }
                newSortData = copyProducts.sort(sortingProducts)
            }

            if(state.sorting_value === "a-z"){
                newSortData = copyProducts.sort((a,b) => {
                    return a.name.localeCompare(b.name);
                })
            }

            if(state.sorting_value === "z-a"){
                newSortData = copyProducts.sort((a,b) => {
                    return b.name.localeCompare(a.name);
                })
            }
            return {
                ...state,
               filter_products: newSortData,
            };
        // for searching products
        case "UPDATE_FILTERS":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            };
        case "UPDATE_FITER_PRODUCTS":
            const { all_products } = state;
            let sortingProducts  = [...all_products];

            const {text , category} = state.filters;
            if(text) {
               sortingProducts =  sortingProducts.filter((currelem) => {
                   return currelem.name.toLowerCase().includes(text)
                })
            }
            return {
                ...state,
                filter_products: sortingProducts,
            };
        default:
            return state;
    }
}
export default FilterReducer;