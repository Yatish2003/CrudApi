import React, { useEffect, useState } from 'react'
import CardsData from './CardsData';
import "./Product.css";
import { Link, useNavigate } from 'react-router-dom';
import Cards from './Cards';
function Product() {
    let [val,setVal]=useState();
    
    const navigate=useNavigate();
    function goToCart(cardId){
        let ID=cardId;
        console.log(ID)
       navigate('/cart',{state:{ID}})
    }
    return (
        <>
        
            <div className='products'>
                {
                    CardsData.map((cardData) => {

                        return (
                            <div className='cards' key={cardData.id}>
                                <img src={cardData.imgUrl} />
                                <h1>{cardData.h1}</h1>
                                <p>{cardData.p}</p>
                                <button className="view" onClick={()=>{
                                    let cardId=cardData.id;
                                    goToCart(cardId);
                                    }
                                }>View</button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Product
