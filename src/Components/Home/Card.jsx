import React from 'react'
import './Card.css';
import { NavLink } from 'react-router';
import PriceFormat from '../reusableComp/PriceFormat';

const Card = ({Products}) => {
  return (
    <NavLink to={`singleProduct/${Products.id}`} className='card'>
        <div className='card-img'>
            <img src={Products.image} alt="" className="feature-pic"/>
        </div>  
        <div className='details'>
            <span className="name">{Products.name}</span>
            <span className='prize'><PriceFormat price={Products.price}/></span>
        </div>
    </NavLink>
  )
}

export default Card
