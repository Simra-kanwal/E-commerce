import React,{useContext} from 'react'
import './Navbar.css'
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router';
import { CartContext } from '../ContextAPI/CartContext';
import { useAuth0 } from "@auth0/auth0-react"; // logIn and logOut

const Navbar = () => {
  
  const {cart} = useContext(CartContext)

  // to display length of cart items
  let cartLength = cart.reduce( (initialValue,currElem) => {
    return initialValue + currElem.value;
  },0)

  const handleHamburger = () => {
    document.querySelector('nav ul').style.top="99%";
    document.querySelector('.right-side').style.top="341%"
  }

  const handleClose = () => {
    document.querySelector('nav ul').style.top="-400%";
    document.querySelector('.right-side').style.top="-400%"
  }

  // For login and logout
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();

  return (
    <>

    <nav>
      <div className="left">
        <NavLink to='/'>
          <img src="logo.png" alt="logo" className='logo'/>
        </NavLink>
          <ul id='menu' className='menu'>
            <div className='nav-items'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </div>
            <div>
              <img src="close.svg" alt="close-icon" className='logo close-icon' onClick={handleClose}/>
            </div>
          </ul>
      </div>
       <div className='right-side'>

          {/* Log In button */}
          {isAuthenticated ? (
          <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          ): (
            <button className="btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}

          <div className="cart">
            <NavLink to="/cart"><FiShoppingCart style={{color:"black", fontSize:"1.5rem"}} /></NavLink>
            <span className='items'>{cartLength}</span>
          </div>
       </div>
        <img src="hamburger.svg" alt="hamburger-icon" className="hamburger" onClick={handleHamburger}/>
    </nav>
    </>
  )
}

export default Navbar
