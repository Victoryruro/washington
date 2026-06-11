import React from 'react';
import './Career.css';
import image1 from '../../assets/GeorgeBg.jpg'
import image2 from '../../assets/George4.jpg'
import image3 from '../../assets/GeorgeBg2.jpg'

const Career = () => {
  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="hero-content">
          <h1>Career</h1>
          <p className="subtitle">1775 — 1797 | Service to the Nation</p>
        </div>
      </section>

      <div className="career-content">
        
        {/* Section 1: Revolutionary War */}
        <section className="career-section">
          <div className="section-grid">
            <div className="section-image">
              <img 
                src={image1} 
                alt="Washington Crossing the Delaware"
              />
            </div>
            <div className="section-text">
              <h2>1. Commander-in-Chief</h2>
              <h3>Revolutionary War (1775–1783)</h3>
              <p>
                In June 1775, George Washington was unanimously appointed Commander-in-Chief of the Continental Army by the Second Continental Congress. 
                He took command of a poorly trained and ill-equipped army outside Boston.
              </p>
              <p>
                Despite facing countless challenges — including supply shortages, harsh winters, and frequent defeats — Washington’s leadership, 
                resilience, and strategic vision kept the army together. His daring crossing of the Delaware River in 1776 and the victory at Yorktown in 1781 
                were turning points that led to American independence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Constitutional Convention */}
        <section className="career-section reverse">
          <div className="section-grid">
            <div className="section-text">
              <h2>2. Constitutional Statesman</h2>
              <h3>1787</h3>
              <p>
                After the war, Washington returned to Mount Vernon. However, in 1787 he was called back to public service to preside over the Constitutional Convention in Philadelphia.
              </p>
              <p>
                His calm authority and respected reputation helped guide the delegates in creating the United States Constitution. 
                His strong support for the new document was instrumental in its ratification.
              </p>
            </div>
            <div className="section-image">
              <img 
                src={image2} 
                alt="George Washington"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Presidency */}
        <section className="career-section">
          <div className="section-grid">
            <div className="section-image">
              <img 
                src={image3} 
                alt="President George Washington"
              />
            </div>
            <div className="section-text">
              <h2>3. First President of the United States</h2>
              <h3>1789 — 1797</h3>
              <p>
                In 1789, Washington was unanimously elected as the first President of the United States. He served two terms and established many traditions 
                still followed today, including the Cabinet system and the tradition of a peaceful transfer of power.
              </p>
              <p>
                As President, he focused on creating a strong federal government, maintaining neutrality in foreign affairs, and setting high ethical standards 
                for the office. In 1797, he voluntarily stepped down after two terms — a powerful act that reinforced the republican ideal.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Career;