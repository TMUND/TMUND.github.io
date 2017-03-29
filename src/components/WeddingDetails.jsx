import React from 'react';
import '../styles/WeddingDetails.scss';


export const WeddingDetails = (props) => {
  return (
    <div className={ (props.className) ? 'details-container ' + props.className : 'details-container'}>
      <h1>{ props.title }</h1>
      <div className='location'>{ props.location } (<a target='_blank' href='https://www.google.com/maps/place/National+Tropical+Botanical+Garden/@21.8875034,-159.4949768,17z/data=!4m8!1m2!2m1!1skauai+national+tropical+botanical+garden!3m4!1s0x0:0x39440497f2d853e5!8m2!3d21.886686!4d-159.4926238'> GMaps Link </a>)</div>
      <div className='address'>{ props.address }</div>
      {
        (props.timeline === 'wedding')
          ? (
              <ul className='timeline-list'>
                <li>3:00 PM - Ceremony</li>
                <li>3:30 PM - Cocktails!</li>
                <li>4:00 PM - Dinner & Dance</li>
                <li>11:00 PM - Drive Safe</li>
              </ul>
            )
          : (
              <ul className='timeline-list'>
                <li>3:00 PM - BBQ</li>
                <li>3:30 PM - Speech</li>
                <li>4:00 PM - Ring Blessing</li>
                <li>11:00 PM - Late Night Snack</li>
              </ul>
            )
      }
    </div>
  );
};

export default WeddingDetails;
