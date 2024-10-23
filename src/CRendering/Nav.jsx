import React,{useState} from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Nav() {
   let [val,setVal]=useState(0)
  return (
   <>
     <div>
        <ul>
            <li onClick={()=>{setVal(0)}}>Home</li>
            <li onClick={()=>{setVal(1)}}>About</li>
            <li onClick={()=>{setVal(2)}}>Contact</li>
        </ul>
    </div>
    {
        val == 0 ? <Home/> : val == 1 ? <About/> : val === 2 ? <Contact/> :"None"
    }
   </>
  )
}

export default Nav
