const CartReducer = (state,action) => {
    switch(action.type){

        //add data to cart
        case "ADD_TO_CART":
        const {id,value,Product} = action.payload;

        if (!id || !Product) {
            console.error("Invalid payload for ADD_TO_CART:", action.payload);
            return state; 
        } 

        const cartId = `${id}${value}`;
        
        //handle existing products
        const existingProducts = state.cart.find(
            (currElem) => currElem && currElem.id === cartId)
           if(existingProducts){
                let updatedProduct = state.cart.map((currElem) => {
                    if (currElem && currElem.id === cartId) {
                        let newAmount = currElem.value + value;
                        return {
                            ...currElem,
                            value: newAmount,
                        }
                    } else {
                        return {
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
            name: Product.title,
            value,
            price: Product.price,
            image: Product.images[0],
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
                if(decrement < 0){
                    decrement = 0;
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