import "./ListView.css";
import { NavLink } from 'react-router';
import PriceFormat from '../reusableComp/PriceFormat';

const ListView = ({productsData}) => {

    return ( 
        <>
            <div className='list-products'>
                {productsData.map((productList) => {
                    return (
                        <ul key={productList.id}>
                            <NavLink to={`singleProduct/${productList.id}`} className='list-card'>
                                <div>
                                    <img src={productList.image} alt="" className="list-pic" />
                                </div>
                                <div className='list-details'>
                                    <p className='list-name'>{productList.name}</p>
                                    <p><PriceFormat price={productList.price} /></p>
                                    <p>{productList.description.slice(0,99)}...</p>
                                    <button>Read More</button>
                                </div>
                            </NavLink>
                        </ul>
                    )
                })}
            </div>
        </>
    )
}

export default ListView
