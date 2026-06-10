import React from 'react';
import './Quotes.css';
import {quotes} from '../../../Quotedata.js'


const Quote = () => {
  return (
    <section className="quotes" id="quotes">
      <div className="quotes-container">
        <div className="section-header">
          <h2>Famous Quotes</h2>
          <div className="gold-bar"></div>
        </div>

        <div className="quotes-grid">
          {quotes.map((quote, index) => (
            <div className="quote-card" key={index}>
              <div className="quote-icon">“</div>
              <p className="quote-text">{quote.text}</p>
              <p className="quote-author">— {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quote;