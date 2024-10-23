import React from 'react'
import SignUp from './SignUp'
import {Link, useLocation} from 'react-router-dom';

function Contact() {
  let location=useLocation();
  console.log(location)
  return (
    <div>
        <h1>Contact</h1>
        <h2><Link to="/contact/Signup">SignUp</Link></h2>
    </div>
  )
}

export default Contact
