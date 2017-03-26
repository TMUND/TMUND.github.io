import React, { Component } from 'react';
import Scroll from 'react-scroll';

import AboutUs from './components/AboutUs';
import BannerImage from './components/BannerImage';
import Header from './components/Header';
import Footer from './components/Footer';
import WeddingDetails from './components/WeddingDetails';
import Venue from './components/Venue';
import Registry from './components/Registry';
import Rsvp from './components/Rsvp';

import './styles/BannerImage.scss';
import './styles/AboutUs.scss';
import './styles/Header.scss';
import './styles/Footer.scss';
import './styles/WeddingDetails.scss';
import './styles/Venue.scss';
import './styles/Rsvp.scss';
import './styles/Registry.scss';
import './styles/App.scss';


const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;


class App extends Component {
  durationFn(deltaTop) {
    return deltaTop;
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  handleSetActive(to) {
    console.log(to, 'to');
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className='app'>
        <BannerImage
          className='home'
          text='Time formula not correct'
          counter={ true }
        />

        <Header
          handleSetActive={ this.handleSetActive }
        />

        <Element name='aboutUs' className='element'>
          <AboutUs
          />
        </Element>

        <Element name='venue' className='element'>
          <Venue
          />
        </Element>

        <Element name='details' className='element'>
          <WeddingDetails
          />
        </Element>

        <Element name='rsvp' className='element'>
          <Rsvp
          />
        </Element>

        <Element name='registry' className='element'>
          <Registry
          />
        </Element>

        <Footer
        />
      </div>
    )
  }
};

export default App;
