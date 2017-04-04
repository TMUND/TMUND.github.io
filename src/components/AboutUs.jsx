import React, { Component } from 'react';
import '../styles/AboutUs.scss';

import sesha from '../assets/sesha_profile.jpg';
import sesha_bw from '../assets/sesha_profile_b&w.jpg';
import toni from '../assets/toni_profile.jpg';
import toni_bw from '../assets/toni_profile_b&w.jpg';

class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hisPhoto: toni_bw,
      herPhoto: sesha_bw,
    }
  }

  onMouseEnterHandler = (event) => {
    if (event.target.className === 'toni-image') {
      this.setState({ hisPhoto: this.state.hisPhoto, herPhoto: sesha, })
    } else if (event.target.className === 'sesha-image') {
      this.setState({ hisPhoto: toni, herPhoto: this.state.herPhoto, })
    } else {
      return;
    }
  }

  onMouseLeaveHandler = (event) => {
    if (event.target.className === 'toni-image') {
      this.setState({ hisPhoto: this.state.hisPhoto, herPhoto: sesha_bw, })
    } else if (event.target.className === 'sesha-image') {
      this.setState({ hisPhoto: toni_bw, herPhoto: this.state.herPhoto, })
    } else {
      return;
    }
  }

  render() {
    return (
      <div className='about-us-container'>
        <div className='content-container her'>
          <h1>Sesha Hanson-Drury</h1>
          <div className='text'>
            <div className='about'>Howdy folks. The name is Toni, but people usually call me "hey you!". Ive been here in Seattle, WA for five years now and I cant ever seem to get enough of the Emerald City. I work as a software developer in Pioneer Square during the week giving me the opportunity to translate my child-like sense of wonder to the internet. On the weekend I can be found hanging with my main man Denis, going to Sounders games, hiking around the PNW or zooming along the Burke-Gilman bike path on my road bike.</div>
          </div>
          <div className='image'><img src={ this.state.herPhoto } className='toni-image' alt='toni' onMouseEnter={ this.onMouseEnterHandler.bind(this) } onMouseLeave={ this.onMouseLeaveHandler.bind(this) } /></div>
        </div>
        <div className='content-container him'>
          <h1>Toni Munder</h1>
          <div className='text'>
            <div className='about'>Howdy folks. The name is Toni, but people usually call me "hey you!". Ive been here in Seattle, WA for five years now and I cant ever seem to get enough of the Emerald City. I work as a software developer in Pioneer Square during the week giving me the opportunity to translate my child-like sense of wonder to the internet. On the weekend I can be found hanging with the best man (Denny Boi), going to Sounders games, hiking around the PNW or zooming along the Burke-Gilman bike path on my road bike.</div>
          </div>
          <div className='image'><img src={ this.state.hisPhoto } className='sesha-image' alt='sesha' onMouseEnter={ this.onMouseEnterHandler.bind(this) } onMouseLeave={ this.onMouseLeaveHandler.bind(this) } /></div>
        </div>
      </div>
    );
  }
};

export default AboutUs;
