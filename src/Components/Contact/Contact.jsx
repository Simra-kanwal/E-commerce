import React,{useState} from 'react'
import './Contact.css'
import { useAuth0 } from '@auth0/auth0-react'

const Contact = () => {

  // For Accessesing user email and name
  // const {user,isAuthenticated} = useAuth0();

  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');

  return (
    <div className='contact'>
      <h1>Contact Form</h1>
      <form action='https://formspree.io/f/movqoywv' method='POST'>
        <div className="form">
          <div className="inputField">
              <p>Username</p>
              <input 
              type="text" 
              name='username' 
              // value={isAuthenticated ? userName.name : userName}
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              required 
              autoComplete='off'
              />
          </div>
          <div className="inputField">
              <p>Email</p>
              <input 
              type="email" 
              name='email' 
              // value={isAuthenticated ? userEmail.email : userEmail}
              value={userEmail}
              onChange={(e) => setuserEmail(e.target.value)}
              required 
              autoComplete='off'
              />
          </div>
          <div className="textarea">
            <textarea name="Message" rows="7" cols="40" placeholder='Enter your message' autoComplete='off'></textarea>
          </div>
          <div className="button">
              <button type='submit'>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
