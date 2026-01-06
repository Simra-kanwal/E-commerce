import { useContext,useEffect } from 'react';
import './singleProduct.css';
import { useParams } from 'react-router'
import { CreateContext } from '../ContextAPI/ProductContext';
import Image from './image';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import AddtoCart from './AddtoCart';
import Name from './Name';

const SingleProduct = () => {
  const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=20";
  const { id } = useParams();

  const {singleProduct,isSingleLoading,getSingleProduct} = useContext(CreateContext);


  useEffect(() => {
    getSingleProduct("https://api.escuelajs.co/api/v1/products/"+ id);
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
          <Image image={singleProduct.images}/>

        </div>

        <div className="productDetails">
          <h2>{singleProduct.title}</h2>
    
          <p className="product-real-price">
            Price: {singleProduct.price}Rs
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
          <hr/>
          
          {/* Add to Cart */}
          <AddtoCart Product = {singleProduct}/>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
