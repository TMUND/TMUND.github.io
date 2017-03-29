import React, { Component } from 'react';
import '../styles/BannerImage.scss';


class BannerImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
  }

  componentDidMount() {
    this.countdown();
  }

  countdown() {
    return setInterval(() => {
      let futureTime = new Date('Dec 20, 2017 16:00:00').getTime();
      let currentTime = new Date().getTime();
      let timeBetween = futureTime - currentTime;

      let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

      if (timeBetween < 0 && this.refs.myRef) {
        clearInterval();

        this.setState({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
      } else if (this.refs.myRef) {
        this.setState({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }
    }, 1);
  }

  render() {
    return (
      <div className={ (this.props.className) ? ('banner-image ' + this.props.className) : 'banner-image' } ref='myRef'>
        <div className='content-wrapper'>
          { (this.props.text) ? <div className='names'>{ this.props.text }</div> : null }
          {
            (this.props.counter)
            ? (<div className='counter'>
              <div className='counter-item days'>{ this.state.days } D</div>
              <div className='counter-item hours'>{ this.state.hours } H</div>
              <div className='counter-item minutes'>{ this.state.minutes } M</div>
              <div className='counter-item seconds'>{ this.state.seconds } s</div>
            </div> )
            : null
          }
        </div>
      </div>
    )
  }
};

export default BannerImage;
