import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let nav=useNavigate();
  function goTo(){
    nav("/effect");
  }
  return (
    <div>
        <h1>Home</h1>
        <button onClick={goTo}>GO TO EFFECT</button>
    </div>
  )
}

export default Home
