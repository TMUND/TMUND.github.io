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
          <li><a href="https://www.tripadvisor.com/Attraction_Review-g60612-d7897045-Reviews-Hanakoa_Falls-Hanalei_Kauai_Hawaii.html">* Day hike on the Kalalau trail to see the Hanakoa falls.</a></li>
          <li><a href="https://www.napali.com/">* Sail with Captain Andys Catamaran Tours</a></li>
          <li><a href="https://www.tripadvisor.com/Attraction_Review-g60627-d247664-Reviews-Waimea_Canyon-Waimea_Kauai_Hawaii.html">* See Waiamea Canyon, Kauais Grand Canyon.</a></li>
          <li>Hang out in historic <a href="https://www.tripadvisor.com/Tourism-g60612-Hanalei_Kauai_Hawaii-Vacations.html">Hanalei town</a> and get some <a href="https://www.yelp.com/biz/wishing-well-hanalei-hanalei-2">Wishing Well Shave Ice.</a></li>
          <li><a href="http://www.hawaiimagazine.com/content/where-snorkel-kauai-during-winter">Snorkel at Anini, Poipu, Lydgate or Koloa Landing Beach.</a></li>
          <li><a href="https://poipubeach.org/blog/kauai-whale-watching-season">December is whale watching season! Catch a peek from Shipwreck Beach.</a></li>
        </ul>
      )
    } else {
      return (
        <ul className='timeline-list'>
          <li><a href="https://www.airbnb.com/s/Kauai-County--HI--United-States/homes?adults=2&allow_override%5B%5D=&checkin=2017-12-18&checkout=2017-12-28&guests=2&s_tag=FlfTEcMD">Rent a condo or house via AirBnB</a></li>
          <li><a href="https://www.vrbo.com/vacation-rentals/usa/hawaii/kauai?sleeps=2-plus&from-date=2017-12-18&to-date=2017-12-29">Rent a condo or house via VRBO</a></li>
          <li><a href="https://www.tripadvisor.com/Hotels-g29218-Kauai_Hawaii-Hotels.html">Top Hotels on the island</a></li>
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
