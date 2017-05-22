import React from 'react';
import '../styles/Rsvp.scss';


export const Rsvp = (props) => {
  return (
    <div className='rsvp-container'>
      <button className='rsvp-button'><a href='http://loveandleis.app.rsvpify.com' target='_blank'>RSVP</a></button>
    </div>
  );
};

export default Rsvp;
