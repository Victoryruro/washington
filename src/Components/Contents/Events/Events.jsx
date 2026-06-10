import React from 'react'
import { useEffect, useRef } from 'react';
import { eventsdata } from '../../../EventsDatabase'
import './Events.css'

const Events = () => {
    const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="timeline">
        {eventsdata.map((event, index) => (
          <div 
            key={event.id} 
            className="timeline-item"
            ref={el => itemsRef.current[index] = el}
          >
            <div className="timeline-image">
              <img src={event.image} alt={event.title} />
            </div>

            <div className="timeline-content" data-year={event.year}>
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <p>{event.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Events