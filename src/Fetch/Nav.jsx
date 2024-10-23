import React from 'react'

import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
        <nav>
        <div className="container-fluid bg-primary d-flex justify-content-center align-items-center" style={{ height: '80px' }}>
                <Link to='/jsonApi' class=' text-dark  text-decoration-none'><h3>JsonApi</h3></Link>
                <Link to='/university' class='m-5 text-dark text-decoration-none' ><h3>University</h3></Link>
                <a href="https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg" class='text-dark text-decoration-none'><h3>BreedsImg</h3></a>
                

            </div>
        </nav>
    </>
  )
}

export default Nav
