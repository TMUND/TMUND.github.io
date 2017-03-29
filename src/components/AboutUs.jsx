import React, { Component } from 'react';
import '../styles/AboutUs.scss';

import him1 from '../assets/him1.jpg';
import him2 from '../assets/him2.jpg';
import her1 from '../assets/her1.jpg';
import her2 from '../assets/her2.jpg';

class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hisPhoto: him1,
      herPhoto: her1,
    }
  }

  onMouseEnterHandler = (event) => {
    if (event.target.className === 'toni-image') {
      this.setState({ hisPhoto: him2, herPhoto: this.state.herPhoto, })
    } else if (event.target.className === 'sesha-image') {
      this.setState({ hisPhoto: this.state.hisPhoto, herPhoto: her2, })
    } else {
      return;
    }
  }

  onMouseLeaveHandler = (event) => {
    if (event.target.className === 'toni-image') {
      this.setState({ hisPhoto: him1, herPhoto: this.state.herPhoto, })
    } else if (event.target.className === 'sesha-image') {
      this.setState({ hisPhoto: this.state.hisPhoto, herPhoto: her1, })
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
          <div className='image'><img src={ this.state.hisPhoto } className='toni-image' alt='toni' onMouseEnter={ this.onMouseEnterHandler.bind(this) } onMouseLeave={ this.onMouseLeaveHandler.bind(this) } /></div>
        </div>
        <div className='content-container him'>
          <h1>Toni Munder</h1>
          <div className='text'>
            <div className='about'>Howdy folks. The name is Toni, but people usually call me "hey you!". Ive been here in Seattle, WA for five years now and I cant ever seem to get enough of the Emerald City. I work as a software developer in Pioneer Square during the week giving me the opportunity to translate my child-like sense of wonder to the internet. On the weekend I can be found hanging with the best man (Denny Boi), going to Sounders games, hiking around the PNW or zooming along the Burke-Gilman bike path on my road bike.</div>
          </div>
          <div className='image'><img src={ this.state.herPhoto } className='sesha-image' alt='sesha' onMouseEnter={ this.onMouseEnterHandler.bind(this) } onMouseLeave={ this.onMouseLeaveHandler.bind(this) } /></div>
        </div>
      </div>
    );
  }
};

export default AboutUs;
