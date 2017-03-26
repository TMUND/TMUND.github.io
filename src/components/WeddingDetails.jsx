import React from 'react';


export const WeddingDetails = (props) => {
  return (
    <div className='wedding-details-container'>
      <div className='wedding'>
        <h1>Wedding Details</h1>
        <ul className='wedding-details-list'>
          <h3>Location:</h3>
          <li>National Tropical Botanical Gardens</li>
          <h3>Date & Time:</h3>
          <li>12/20/2017</li>
          <li>Ceremony @ 12</li>
          <li>Reception @ 3</li>
          <h3>Other thing:</h3>
          <li>So much information for you</li>
        </ul>
      </div>

      <div className='rehearsal'>
        <h1>Rehearsal Details</h1>
        <ul className='rehearsal-details-list'>
          <h3>Location:</h3>
          <li>National Tropical Botanical Gardens</li>
          <h3>Date & Time:</h3>
          <li>12/20/2017</li>
          <li>Ceremony @ 12</li>
          <li>Reception @ 3</li>
          <h3>Other thing:</h3>
          <li>So much information for you</li>
        </ul>
      </div>
    </div>
  );
};

export default WeddingDetails;
