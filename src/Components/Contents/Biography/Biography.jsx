import React from 'react'
import './Biography.css'
import image from '../../../assets/George4.jpg' 

const Biography = () => {
  return (
    <>
        <section className="biography" id="biography">
            <div className="biography-container">
                
                <div className="section-header">
                <h2>Biography</h2>
                <div className="gold-bar"></div>
                </div>

                <div className="biography-content">
                    <div className="biography-image">
                        <img 
                        src={image} 
                        alt="George Washington Portrait"
                        loading='lazy'
                        />
                    </div>

                    <div className="biography-text">
                        <p>
                        <strong>George Washington</strong> (February 22, 1732 – December 14, 1799) was an American military officer, statesman, 
                        and Founding Father who served as the <strong>first President of the United States</strong> from 1789 to 1797.
                        </p>

                        <p>
                        Born into a planter family in Westmoreland County, Virginia, he became a surveyor as a young man. He gained valuable 
                        military experience during the French and Indian War (1754–1758).
                        </p>

                        <p>
                        In 1759, he married Martha Dandridge Custis and settled at <strong>Mount Vernon</strong>. When the Revolutionary War began, 
                        he was appointed Commander-in-Chief of the Continental Army in 1775. Through perseverance and strategic leadership, 
                        he led the American colonies to victory, highlighted by the decisive Battle of Yorktown in 1781.
                        
                        Washington presided over the Constitutional Convention in 1787 and was unanimously elected as the first President in 1789. 
                        He served two terms and voluntarily retired in 1797, establishing a lasting precedent of peaceful transition of power.
                        </p>

                        <p>
                        He passed away at Mount Vernon on December 14, 1799. Revered as the <strong>"Father of His Country"</strong>, 
                        George Washington remains one of the most influential and respected figures in American history.
                        </p>
                    </div>
                </div>
                <small>Credits : Wikipedia</small>
            </div>
        </section>

    </>
  )
}

export default Biography