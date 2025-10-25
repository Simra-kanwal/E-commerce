import {useContext} from 'react';
import {CreateContext} from '../ContextAPI/ProductContext';
import Card from './Card';
import './FeatureProducts.css';

const FeatureProducts = () => {

    const {featureProducts} = useContext(CreateContext);
  
  return (
    <section className="features">
        <div>
          <p>Check Now</p>
          <h1>Our Feature Services</h1>
          <div className="cards">
            {featureProducts.map((featureProducts) => {
              return(
                <ul key={featureProducts.id}>
                  <Card Products={featureProducts}/>
                </ul>
                )
              })}
          </div>
        </div>                  
  </section>
)}

export default FeatureProducts
