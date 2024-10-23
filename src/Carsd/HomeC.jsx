import React from 'react'
import Product from './Product'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function HomeC() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/product'>Products</Link><br/>
      {/* <Link to='/cart'>cart</Link> */}

    </div>
  )
}

export default HomeC
