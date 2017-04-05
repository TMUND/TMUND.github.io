import React from 'react';
import '../styles/Rsvp.scss';


export const Rsvp = (props) => {
  return (
    <div className='rsvp-container'>
      <h1>Here we go, are you ready??</h1>
      <div className='text'>Click below when youre ready to commit to an amazing time in Hawaii!</div>
      <div className='link'><a href='http://loveandleis.app.rsvpify.com' target='_blank'>CLICK ME TO RSVP!</a></div>
      <div className='thank-you'>Mahalo a nui loa!</div>
    </div>
  );
};

export default Rsvp;
