import React from 'react'
import CardsData from './CardsData';
import { Link, useLocation } from 'react-router-dom';


function Cards() {
  let location = useLocation();

  const productId = location.state.ID ;

  // console.log(productId, "productId")
  return (
    <div>
      <h1>Cart</h1>
      {
        CardsData.map((cards) => {
          console.log(cards.id, "cards.id")
          if (cards.id == productId) {
            // {console.log("found")}
            // console.log(cards.imgUrl,"cards")
            // console.log(cards.h1,"cards.h1")

            return (
              <div className='cards' >
                <img src={cards.imgUrl} />
                <h1>{cards.h1}</h1>
                <p>{cards.p}</p>
              </div>
            )

          } 
        })
      }
      <Link to='/product'>GO TO Products</Link>
    </div>
  )
}

export default Cards



