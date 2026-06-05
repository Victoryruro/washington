import React from 'react'
import './Hero.css'
import heroimg from '../../assets/GeorgeBg2.jpg'
const Hero = () => {
  return (
    <>
        <div className="hero"> 
          <div className="text">
            <h1>George Washington – Father  <br /> of America</h1>
            <p>Commander, Statesman, Legend</p>
          </div> 
          <div className="heroimg">
            <img src={heroimg} alt="George Washington" />

          </div>

        </div>
    </>
  )
}

export default Hero