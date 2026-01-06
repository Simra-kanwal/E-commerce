import React from 'react'
import './Card.css';
import { NavLink } from 'react-router';

const Card = ({Products}) => {
  return (
    <NavLink to={`singleProduct/${Products.id}`} className='card'>
        <div className='card-img'>
            <img src={Products.images[0]} alt="" className="feature-pic"/>
        </div>  
        <div className='details'>
            <span className="name">{Products.title}</span>
            <span className='prize'>{Products.price}Rs</span>
        </div>
    </NavLink>
  )
}

export default Card
