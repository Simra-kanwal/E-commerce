
import React, { useContext } from 'react'
import './Sort.css';
import { BsFillGridFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import {FilterContext} from '../ContextAPI/FilterContext'

const Sort = ({gridView,listView,setGrid,setList}) => {

  const {filter_products,handleDropdown} = useContext(FilterContext);
  const {filters:{text},updateFilters} = useContext(FilterContext);
  

  const handleList = () => {
    setList(true);
    setGrid(false);
  }

  const handleGrid = () => {
    setGrid(true);
    setList(false);
  }

  
  return (
    <div className='sort'>
        <div className="products-view">
            <div className={gridView === true ? "bg-lightWhite" : ""} id='icon-container'>
              <BsFillGridFill className='view-icons' title='grid-view' onClick={handleGrid}/>
            </div>
            <div className={listView === true ? "bg-lightWhite" : ""} id='icon-container'>
              <CiCircleList className='view-icons' title='list-view' onClick={handleList}/>
            </div>
            <div className="totalProducts hide">
            {filter_products.length} total products
            </div>
        </div>
        <div className='sorting'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" 
                name="text" 
                value={text} 
                className="search-input" 
                placeholder='Search' 
                autoComplete='off'
                onChange={updateFilters}
                />
            </form>
            <div className="dropdown">
              <select name='sort' onClick={handleDropdown} id='sort'>
                <option value="lowest">Price(Lowest)</option>
                <option value="#" disabled></option>  {/* for Space in dropdown */}
                <option value="highest">Price(Highest)</option>
                <option value="#" disabled></option>  {/* for Space in dropdown */}
                  <option value="a-z">Price(a-z)</option>
                <option value="#" disabled></option>  {/* for Space in dropdown */}
                <option value="z-a">Price(z-a)</option>
              </select>
            </div>
        </div>
    </div>
  )
}

export default Sort;
