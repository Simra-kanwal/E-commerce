import React from 'react'
import Button from '../reusableComp/Button'
import './Footer.css';
import { NavLink } from 'react-router';
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="started">
        <div className="startContent">
          <p>
            Ready to get started?
          </p>
          <p>
            Talk to us today.
          </p>
        </div>
        <NavLink to="/contact"  className="startBtn">
          <Button text="Started"/>
        </NavLink>
      </div>

      <div className="footer">
        <div className='lorem'>
          <p>Ecommerce Application</p>
          <p>Lorem ipsum dolor sit, amet consectetur adi elit.</p>
        </div>
        <div className='update'>
          <p>Subscribe to get important updates</p>
          <input type="text" placeholder='Your e-mail'/>
          <div className='subscribebtn'>
            <Button text="Subscribe"/>
          </div>
        </div>
        <div className='follow'>
          <p>Follow us</p>
          <div className="footericons">
            <FaYoutube style={{fontSize:"22px"}}/>
            <FiInstagram  style={{fontSize:"22px"}}/>
            <GrGithub style={{fontSize:"22px"}}/>
          </div>
        </div>
        <div className='call'>
          <p>Call us</p>
          <p>+92 1923089211</p>
        </div>
      </div>
    </>
  )
}

export default Footer
