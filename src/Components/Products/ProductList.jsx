import React, { useContext } from 'react';
import { CreateContext } from '../ContextAPI/ProductContext';
import './ProductList.css';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = ({gridView,listView,filterProducts}) => {

  const {isloading,isError} = useContext(CreateContext);

  if(isloading){
    return(
      <div>Loading...</div>
    )
  }

  if(isError){
    return(
      <h1>Something went wrong please try again later.</h1>
    )
  }

  if(gridView){
    return <GridView productsData = {filterProducts}/>
  }

  if(listView){
    return <ListView productsData = {filterProducts}/>
  }

  return (
    <>
     
    </>
  )
}

export default ProductList
