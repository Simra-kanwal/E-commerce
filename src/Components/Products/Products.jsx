import React,{useContext, useState} from 'react'
import './Products.css';
import Sort from './Sort'
import ProductList from './ProductList';
import { FilterContext } from '../ContextAPI/FilterContext';
const Products = () => {

  const [gridView, setgridView] = useState(true);
  const [listView,setlistView] = useState(false);

  const {filter_products} = useContext(FilterContext)

  return (
    <div className="Products-container">
      <div className="product-list-container">
        <div className='main-products'>
          <Sort gridView={gridView} listView={listView} setGrid={setgridView} setList={setlistView} />
          <ProductList gridView={gridView} listView={listView} filterProducts={filter_products}/>
        </div>
      </div>
    </div>
  )
}

export default Products;
