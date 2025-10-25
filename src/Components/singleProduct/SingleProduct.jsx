import React, { useContext,useEffect } from 'react';
import './singleProduct.css';
import { NavLink, useParams } from 'react-router'
import { CreateContext } from '../ContextAPI/ProductContext';
import Image from './image';
import PriceFormat from '../reusableComp/PriceFormat';
import Stars from './Stars';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import AddtoCart from './AddtoCart';
import Name from './Name';

const SingleProduct = () => {
  const API = "https://api.pujakaitem.com/api/products";
  const { id } = useParams();

  const {singleProduct,isSingleLoading,getSingleProduct} = useContext(CreateContext);
  
  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
    // getSingleProduct(`${API}?id=${id}`)
  }, []);
  
  
  if(isSingleLoading){
      return(
        <div>Loading...</div>
      )
   }
  return (
    <>
      <div className="mainContent">
        <div className="moreImages">

          {/* Images Component */}
          <Image image={singleProduct.image}/>

        </div>

        <div className="productDetails">
          <h2>{singleProduct.name}</h2>
          
          {/* Stars component */}
          <Stars stars={singleProduct.stars} reviews={singleProduct.reviews}/>
    
          <div className="productPrice">
              MRP: 
              <del>
                <PriceFormat price={singleProduct.price + 250000}/>
              </del>
          </div>
          <p className="product-real-price">
            Deal of the Day: <PriceFormat price={singleProduct.price}/>
          </p>
          <p className='product-description'>{singleProduct.description}</p>
          <div className="product-warrenty-data">
            <div className="warrenty-data">
              <TbTruckDelivery style={{fontSize:"35px",backgroundColor:"#e7e7e7",borderRadius:"30px",padding:"2px 7px"}}/>
              <p>Free Delivery</p>
            </div>
            <div className="warrenty-data">
              <TbReplace style={{fontSize:"35px",backgroundColor:"#e7e7e7",borderRadius:"30px",padding:"2px 7px"}}/>
              <p>30 days of Replacement</p>
            </div>
            <div className="warrenty-data">
              <MdOutlineSecurity style={{fontSize:"35px",backgroundColor:"#e7e7e7",borderRadius:"30px",padding:"2px 7px"}}/>
              <p>Year Warrenty</p>
            </div>
          </div>
          <div className="product-data-info">
            <p>Available: <span> {singleProduct.stock > 0 ? "In stock" : "Not Available"}  </span></p>
            <p>Brand: <span>{singleProduct.company}</span></p>
          </div>
          <hr/>
          
          {/* Add to Cart */}
          {singleProduct.stock > 0 ? <AddtoCart Product = {singleProduct}/> : ""}
        </div>
      </div>
    </>
  )
}

export default SingleProduct
