import React,{useState, useContext} from 'react'
import './AddtoCart.css'
import Button from '../reusableComp/Button'
import { NavLink } from 'react-router';
import { CartContext } from '../ContextAPI/CartContext';

const AddtoCart = ({Product}) => {

   const {AddToCart} = useContext(CartContext) 
   const {id} = Product; 
    
  const [value, setvalue] = useState(1)
  const handleIncrement = ()  => {
      setvalue(value + 1)
  } 
  const handleDecrement = ()  => {
    if(value > 1){
      setvalue(value - 1)
    }
    else{
      setvalue(value)
    }
  } 

  return (
    <>
      <div className="increment">
        <span onClick={handleDecrement} className='itemsvalue green'>-</span> {value} <span onClick={handleIncrement} className='itemsvalue red'>+</span>
      </div>
      <NavLink to="/Cart" style={{marginTop:"20px"}} onClick={() => AddToCart(id,value,Product)}> {/* tick stores the value of current color */}
        <Button text="Add to Cart"/>
      </NavLink>
    </>
  )
}

export default AddtoCart
