import React from 'react';
import './EarlyLife.css';
import image1 from '../../assets/George2.jpg'
import image2 from '../../assets/George4.jpg'
import image3 from '../../assets/George1.jpg'
const EarlyLife = () => {
  return (
    <div className="early-life">

      <section className="early-hero">
        <div className="hero-content">
          <h1>Early Life</h1>
          <p className="subtitle">1732 — 1759 | The Formative Years</p>
        </div>
      </section>

      <div className="early-content">
        
       
        <section className="early-section">
          <div className="section-grid">
            <div className="section-image">
              <img 
                src={image1} 
                alt="Young George Washington"
              />
            </div>
            <div className="section-text">
              <h2>1. Birth and Family</h2>
              <p>
                George Washington was born on <strong>February 22, 1732</strong> in Westmoreland County, Virginia. 
                He was the first child of Augustine Washington and his second wife, Mary Ball Washington.
              </p>
              <p>
                Coming from a family of planters, Washington was the eldest of six children from this marriage. 
                He grew up on several plantations along the Potomac River. His father died when he was only 11 years old, 
                which had a deep impact on his upbringing.
              </p>
            </div>
          </div>
        </section>

        
        <section className="early-section reverse">
          <div className="section-grid">
            <div className="section-text">
              <h2>2. Education</h2>
              <p>
                Unlike many children of wealthy families, George Washington received limited formal education. 
                He was mostly homeschooled and taught by local tutors.
              </p>
              <p>
                He excelled in mathematics and learned practical skills such as surveying. He was particularly 
                fond of rules of civility and good behavior, copying over 100 rules by hand as a young boy. 
                These early lessons greatly shaped his disciplined character.
              </p>
            </div>
            <div className="section-image">
              <img 
                src={image2} 
                alt="George Washington Portrait"
              />
            </div>
          </div>
        </section>

        {/*  French and Indian War */}
        <section className="early-section">
          <div className="section-grid">
            <div className="section-image">
              <img 
                src={image3} 
                alt="French and Indian War"
              />
            </div>
            <div className="section-text">
              <h2>3. French and Indian War</h2>
              <p>
                At just 21 years old, Washington began his military career. In 1754, he was sent into the Ohio Valley, 
                where he fought the first skirmish of what would become the French and Indian War.
              </p>
              <p>
                He gained valuable — though sometimes painful — experience, including the disastrous defeat of 
                General Braddock in 1755. By the end of the war in 1758, Washington had risen to the rank of Colonel 
                and earned a reputation for courage and leadership under fire.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EarlyLife;