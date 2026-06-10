import React from 'react'
import './Hero.css'
import heroimg from '../../assets/GeorgeBg2.jpg'
const Hero = () => {
  return (
    <>
        <div className="hero"> 
          <div className="text">
            <h1>George Washington <br /> – Father  of America</h1>
            <p>Commander, Statesman, Legend. <br /> 1st President of the United States</p>
            <button>Explore His Legacy</button>
          </div> 
          <div className="heroimg">
            <img src={heroimg} alt="George Washington " loading='lazy'  />

          </div>

        </div>
    </>
  )
}

export default Hero