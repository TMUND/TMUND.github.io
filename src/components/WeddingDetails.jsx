import React from 'react';
import '../styles/WeddingDetails.scss';


export const WeddingDetails = (props) => {
  let gmapLink = (props.location === 'National Tropical Botanical Gardens')
    ? 'https://www.google.com/maps/place/National+Tropical+Botanical+Garden/@21.8875034,-159.4949768,17z/data=!4m8!1m2!2m1!1skauai+national+tropical+botanical+garden!3m4!1s0x0:0x39440497f2d853e5!8m2!3d21.886686!4d-159.4926238'
    : 'https://www.google.com/maps/place/2250+Kuai+Rd,+Koloa,+HI+96756/@21.8748495,-159.4532179,17z/data=!3m1!4b1!4m5!3m4!1s0x7c071a96f48dbe47:0xd52af7ae135acf14!8m2!3d21.8748495!4d-159.4510292'

  return (
    <div className={ (props.className) ? 'details-container ' + props.className : 'details-container'}>
      { (props.imageBefore) ? <div className='image'><img src={ props.imageBefore } alt='national tropical botanical garden' /></div> : null }
      <h1>{ props.title }</h1>
      <div className='location'>{ props.location } (<a target='_blank' href={ gmapLink }> GMaps Link </a>)</div>
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
      { (props.imageAfter) ? <div className='image'><img src={ props.imageAfter } alt='poipu house' /></div> : null }
    </div>
  );
};

export default WeddingDetails;
