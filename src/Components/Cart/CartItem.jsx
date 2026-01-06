import React, { useContext } from 'react'
import './CartItem.css'
import { MdDelete } from "react-icons/md";
import './Cart.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CartContext } from '../ContextAPI/CartContext';

const CartItem = ({data}) => {
    
    const {handleData,handleDecrement,handleIncrement} = useContext(CartContext)

    return (
        <>
            <div className='item-data'>
                <img src={data.image} alt="" width={70} height={60}/>
                <div className='item-para'>
                    <p>{data.name}</p>
                </div>
            </div>
            <div className="price">{data.price}</div>
            <p>
                <FaMinus className='quantity-icons' onClick={() => handleDecrement(data.id)}/>
                 <span className='quantity'> {data.value} </span>
                <FaPlus className='quantity-icons' onClick={() => handleIncrement(data.id)}/>
            </p>
            <p className="hide">{data.price * data.value}</p>
            <MdDelete className="hide" style={{ color: "red", fontSize: '23px', cursor: 'pointer' }} onClick={() => handleData(data.id)}/>

        </>
    )
}

export default CartItem
