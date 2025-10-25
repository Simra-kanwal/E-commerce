import './HeroSection.css'
import Button from '../reusableComp/Button'
import { NavLink } from 'react-router'

const HeroSection = () => {
  return (
    <>
      <section id="firstPart">
        <div className="content">
          <p>Welcome to</p>
          <h1 className='tracking-in-expand-fwd'>PrimeStore</h1>
          <p>Everything You Need, One Click Away.You can buy anything you want from here.Discover amazing products at great prices. Find what you need.</p>
          <div className="shop-btn">
            <NavLink to="/Products"> <Button text="Shop Now" /></NavLink>
          </div>
        </div>
        <div className='shopping-pic'>
          <img src="shoppingCart.png" alt="shopping-pic" className="shopping" />
        </div>
      </section>
    </>
  )
}

export default HeroSection
