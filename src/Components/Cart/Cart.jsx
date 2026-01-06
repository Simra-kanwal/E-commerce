import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../ContextAPI/CartContext'
import CartItem from './CartItem'
import { NavLink } from 'react-router';
import PriceFormat from '../reusableComp/PriceFormat';

const Cart = () => {
  const {cart,removeAllData} = useContext(CartContext);
  
  // sum all the prices
  let totalValue;
  let shippingFee = 500;

  {cart && cart.map((currElem) => {
    return  currElem.price * currElem.value
  }).reduce((accu,exp) => {
    return totalValue = accu + exp;
  },0)}

  return (
    <>
      <div className="cartContainer">
        <div className='cart-heading'>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p className='hide'>Subtotal</p>
            <p className='hide'>Remove</p>
        </div>
        <hr />
        <div className={cart.length === 0 ? 'message' : ''}>{cart.length === 0 ? 'Cart is Empty' : ''}</div>
        <div className="cart-data-container">
          {cart && cart.map((currElem) => {
            return (
             currElem && <ul className="cart-data" key={currElem && currElem.id}>
                <CartItem data={currElem}/>
              </ul>
            )
          })}
        </div>
        <hr />
        <div className="cart-buttons">
          <NavLink to="/products">
            <button className='cart-btn'>Continue Shopping</button>
          </NavLink>
          <button  className="cart-btn" style={{backgroundColor: '#0869d1'}} onClick={removeAllData}>Clear Data</button>
        </div>
        <div className="total-amount-container">
          <div className="total-amount">
                  <p>Sub Total: <span>{totalValue}</span></p>
                  <p>Shipping Fee: <span>{shippingFee}</span></p>
                  <hr />
                  <p style={{marginTop:'10px'}}>Total Price: <span>{totalValue + shippingFee}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

