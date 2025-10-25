import React from 'react';
import './Stars.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({stars,reviews}) => {

 let ratingStar = Array.from({length:5},(elem,index) => {
    let number = index + 0.5;
    return(
        <span key={index}>
            {stars >= index + 1 ? <FaStar className='star-icon'/> 
            : stars >= number ? <FaStarHalfAlt className='star-icon'/> 
            : <AiOutlineStar className='empty-star'/>}
        </span>
    )
  })  
  return (
    <>
        <div className="stars">
          {ratingStar} 
          <span className='reviews'>({reviews} customer reviews)</span>
        </div>
    </>
  )
}

export default Stars
