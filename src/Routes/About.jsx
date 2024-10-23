import React from 'react'
import { Link, useParams } from 'react-router-dom'

function About() {
  let Url = useParams();
  console.log(Url.info);
  return (
    <>
      <div>
        <h1>About</h1>
        <ul>

          <Link to="/about/website"><li>Website</li></Link>
          <Link to="/about/organization"><li>organization</li></Link>
          <Link to="/about/email"><li>Email</li></Link>

        </ul >
    </div >
    </>
  )
}

export default About
