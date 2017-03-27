import React from 'react';
import '../styles/AboutUs.scss';


export const AboutUs = (props) => {
  return (
    <div className='about-us-container'>
      <div className='content-container her'>
        <div className='image'></div>
        <div className='text'>
          <div className='label'>Her:</div>
          <div className='about'>Howdy folks. The name is Toni, but people usually call me "hey you!". Ive been here in Seattle, WA for five years now and I cant ever seem to get enough of the Emerald City. I work as a software developer in Pioneer Square during the week giving me the opportunity to translate my child-like sense of wonder to the internet. On the weekend I can be found hanging with my main man Denis, going to Sounders games, hiking around the PNW or zooming along the Burke-Gilman bike path on my road bike.</div>
        </div>
      </div>
      <div className='content-container him'>
        <div className='image'></div>
        <div className='text'>
          <div className='label'>Him:</div>
          <div className='about'>Howdy folks. The name is Toni, but people usually call me "hey you!". Ive been here in Seattle, WA for five years now and I cant ever seem to get enough of the Emerald City. I work as a software developer in Pioneer Square during the week giving me the opportunity to translate my child-like sense of wonder to the internet. On the weekend I can be found hanging with my main man Denis, going to Sounders games, hiking around the PNW or zooming along the Burke-Gilman bike path on my road bike.</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
