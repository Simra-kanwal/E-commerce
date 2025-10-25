import React,{useState,useEffect, useContext} from 'react'
import './AddtoCart.css'
import { TiTickOutline } from "react-icons/ti";
import Button from '../reusableComp/Button'
import { NavLink } from 'react-router';
import { CartContext } from '../ContextAPI/CartContext';

const AddtoCart = ({Product}) => {

   const {AddToCart} = useContext(CartContext) 
   const {id, colors, stock} = Product; 

   const [tick, settick] = useState(colors[0])
   useEffect(() => {
    if (colors.length > 0) {
      settick(colors[0]);
    }
  }, [colors]);

   const handleTick = (colors) => {
     settick(colors)
    }
    
  const [value, setvalue] = useState(1)
  const handleIncrement = ()  => {
    if(value < stock){
      setvalue(value + 1)
    }
    else{
      setvalue(value)
    }
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
      <div className='CartColors'>
        <p>
        Colors:
        {colors.map((colors,index) => {
        return(
               <button key={index} style={{backgroundColor:colors}} className="colors" onClick={() => handleTick(colors)}> 
               {tick === colors ? <TiTickOutline className='tick'/> : ""} 
               </button>
        )
    })}
        </p>
      </div>
      <div className="increment">
        <span onClick={handleDecrement} className='itemsvalue green'>-</span> {value} <span onClick={handleIncrement} className='itemsvalue red'>+</span>
      </div>
      <NavLink to="/Cart" style={{marginTop:"20px"}} onClick={() => AddToCart(id,tick,value,Product)}> {/* tick stores the value of current color */}
        <Button text="Add to Cart"/>
      </NavLink>
    </>
  )
}

export default AddtoCart
