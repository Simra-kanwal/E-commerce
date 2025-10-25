const CartReducer = (state,action) => {
    switch(action.type){

        //add data to cart
        case "ADD_TO_CART":
        const {id,tick,value,Product} = action.payload;

        if (!id || !Product) {
            console.error("Invalid payload for ADD_TO_CART:", action.payload);
            return state; // Return the current state if payload is invalid
        } 

        const cartId = `${id}${tick}`;
        
        //handle existing products
        const existingProducts = state.cart.find(
            (currElem) => currElem && currElem.id === cartId)
           if(existingProducts){
                let updatedProduct = state.cart.map((currElem) => {
                    if(currElem && currElem.id == id + tick){
                        let newAmount = currElem.value + value;
                        // to handle stock value in increment
                        if (newAmount >= currElem.max){
                            newAmount = currElem.max;
                        }
                        return {
                            ...currElem,
                            value: newAmount,
                        } 
                    } 
                    else{
                        return{
                            ...currElem,
                        }
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct,
                }
           } 
           else{
           let cartProduct;
           cartProduct = {
            id: cartId, 
            name: Product.name,
            tick,
            value,
            price: Product.price,
            max: Product.stock,
            image: Product.image[0].url,
           }
           return {
               ...state,
               cart: [...state.cart,cartProduct],
            };
        }

        //increment and decrement
        case "INCREMENT":
            let updatedIncrement = state.cart.map((currElem) => {
               if( currElem && currElem.id === action.payload ){
                   let increment = currElem.value + 1;
                   if(increment > currElem.max){
                    increment = currElem.max;
                   }
                   return {
                        ...currElem,
                        value: increment,
                    }
                }
            else{return currElem}
            })
            return{
                ...state,
                cart: updatedIncrement,
            }
         case "DECREMENT":
            let updatedDecrement = state.cart.map((currElem) => {
               if(  currElem && currElem.id === action.payload ){
                let decrement = currElem.value - 1;
                if(decrement < 1){
                    decrement = 1;
                }
                return {
                   ...currElem,
                        value: decrement,
                   };
            }
            else{
                return currElem;
            }
        })
        return{
        ...state,
        cart: updatedDecrement,
        }

        // remove single item from cart
        case "REMOVE_ITEM":
            let update = state.cart.filter((currElem) => {
             return currElem && currElem.id !== action.payload;
            })
            return {
                ...state,
                cart: update,
            }
        
        // remove all data from cart
        case "REMOVE_DATA":
            return {
                ...state,
                cart: [],
            }
        
        default:
            return state;
    }
}
export default CartReducer;