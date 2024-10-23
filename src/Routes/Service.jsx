import React from 'react'
import { useNavigate } from 'react-router-dom'

function Service() {
    let navigate=useNavigate();
    function nav(){
        let data="hello";
        navigate("/contact",{state:{data}})
    }
  return (
    <div>
      <h1>Service</h1>
      <button onClick={nav}>contact</button>
    </div>
  )
}

export default Service
