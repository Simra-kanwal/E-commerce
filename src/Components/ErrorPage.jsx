import React from 'react';
import './Errorpage.css'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  }

  return (  
    <div className='error-page'>
      <h1 style={{fontSize:"50px"}}>404</h1>
      <h1>Error: The page you are looking for does not exist</h1>
      <NavLink to="/" className="errorbutton">Go To Home Page</NavLink>
      <button className='errorbutton' onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default ErrorPage;
