import React from 'react';
import '../styles/WeddingDetails.scss';


export const WeddingDetails = (props) => {
  let buildSubTitle = function(location) {
    if (location === 'National Tropical Botanical Gardens') {
      return <div className='location'>{ props.location } (<a target='_blank' href='https://www.google.com/maps/place/National+Tropical+Botanical+Garden/@21.8875034,-159.4949768,17z/data=!4m8!1m2!2m1!1skauai+national+tropical+botanical+garden!3m4!1s0x0:0x39440497f2d853e5!8m2!3d21.886686!4d-159.4926238'> GMaps Link </a>)</div>
    } else if (location === 'Poipu Beach House') {
      return <div className='location'>{ props.location } (<a target='_blank' href='https://www.google.com/maps/place/2250+Kuai+Rd,+Koloa,+HI+96756/@21.8748495,-159.4532179,17z/data=!3m1!4b1!4m5!3m4!1s0x7c071a96f48dbe47:0xd52af7ae135acf14!8m2!3d21.8748495!4d-159.4510292'> GMaps Link </a>)</div>
    } else {
      return <div className='location'>{ props.location }</div>
    }
  }

  let buildDetailList = function(timeline) {
    if (props.timeline === 'wedding') {
      return (
        <ul className='timeline-list'>
          <li>3:00 PM - Ceremony</li>
          <li>3:30 PM - Cocktails!</li>
          <li>4:00 PM - Dinner & Dance</li>
          <li>11:00 PM - Drive Safe</li>
        </ul>
      )
    } else if (props.timeline === 'rehearsal') {
      return (
        <ul className='timeline-list'>
          <li>3:00 PM - BBQ</li>
          <li>3:30 PM - Speech</li>
          <li>4:00 PM - Ring Blessing</li>
          <li>11:00 PM - Late Night Snack</li>
        </ul>
      )
    } else if (props.timeline === 'activities') {
      return (
        <ul className='timeline-list'>
          <li><a>* Day hike on the Kalalau trail to see the Hanakoa falls.</a></li>
          <li><a>* Sail with Captain Andys Catamaran Tours</a></li>
          <li><a>* See Waiamea Canyon, Kauais Grand Canyon.</a></li>
          <li><a>Hang out in historic Hanalei town and get some Wishing Well Shave Ice.</a></li>
          <li><a>Snorkel at Anini, Poipu, Lydgate or Koloa Landing Beach.</a></li>
          <li><a>December is whale watching season! Catch a peek from Shipwreck Beach.</a></li>
        </ul>
      )
    } else {
      return (
        <ul className='timeline-list'>
          <li><a>Rent a condo or house via AirBnB</a></li>
          <li><a>Rent a condo or house via VRBO</a></li>
          <li><a>Top Hotels on the island</a></li>
        </ul>
      )
    }
  }

  return (
    <div className={ (props.className) ? 'details-container ' + props.className : 'details-container'}>
      { (props.imageBefore) ? <div className='image'><img src={ props.imageBefore } alt='national tropical botanical garden' /></div> : null }
      <div className='text-container'>
        <h1>{ props.title }</h1>
        { buildSubTitle(props.location) }
        <div className='address'>{ props.address }</div>
        { buildDetailList(props.timeline) }
      </div>
      { (props.imageAfter) ? <div className='image'><img src={ props.imageAfter } alt='poipu house' /></div> : null }
    </div>
  );
};

export default WeddingDetails;
