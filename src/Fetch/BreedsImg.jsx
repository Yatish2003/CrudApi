import React, { useEffect } from 'react'
import Nav from './Nav';
function BreedsImg() {
  useEffect(()=>{
    let Imgs=fetch('https://dog.ceo/api/breeds/image/random')
    .then((resp)=>{
      console.log(resp);
    })
  })
  return (
    <div>
      <Nav/>
      <h1>BreedsImg</h1>
    </div>
  )
}

export default BreedsImg
