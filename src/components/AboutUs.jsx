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
            <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tincidunt nibh. Curabitur elementum id erat at venenatis. Etiam pellentesque aliquet enim ut scelerisque. Donec maximus imperdiet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel consectetur libero. Duis molestie dignissim felis, tincidunt convallis ex semper sed. Morbi efficitur odio id varius mollis. Maecenas at nulla ut tellus viverra vestibulum at id lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tortor tortor, cursus ac eros quis, finibus ultrices tellus. Proin suscipit quam libero, quis commodo velit pretium dapibus. Maecenas ultrices vitae leo sed lobortis. Ut imperdiet pellentesque mollis. Etiam odio leo, imperdiet nec neque id, placerat viverra nisl. Nam facilisis consectetur magna, mollis gravida nisi suscipit et.</div>
          </div>
          <div className='image'><img src={ this.state.herPhoto } className='toni-image' alt='toni' onMouseEnter={ this.onMouseEnterHandler.bind(this) } onMouseLeave={ this.onMouseLeaveHandler.bind(this) } /></div>
        </div>
        <div className='about-us-divider'></div>
        <div className='content-container him'>
          <h1>Toni Munder</h1>
          <div className='text'>
            <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tincidunt nibh. Curabitur elementum id erat at venenatis. Etiam pellentesque aliquet enim ut scelerisque. Donec maximus imperdiet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel consectetur libero. Duis molestie dignissim felis, tincidunt convallis ex semper sed. Morbi efficitur odio id varius mollis. Maecenas at nulla ut tellus viverra vestibulum at id lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tortor tortor, cursus ac eros quis, finibus ultrices tellus. Proin suscipit quam libero, quis commodo velit pretium dapibus. Maecenas ultrices vitae leo sed lobortis. Ut imperdiet pellentesque mollis. Etiam odio leo, imperdiet nec neque id, placerat viverra nisl. Nam facilisis consectetur magna, mollis gravida nisi suscipit et.</div>
          </div>
          <div className='image'><img src={ this.state.hisPhoto } className='sesha-image' alt='sesha' onMouseEnter={ this.onMouseEnterHandler.bind(this) } onMouseLeave={ this.onMouseLeaveHandler.bind(this) } /></div>
        </div>
      </div>
    );
  }
};

export default AboutUs;
