import React from 'react'
import Service from './Service';

import {Link} from 'react-router-dom';
function Nav() {

  return (
    <>
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Nav
