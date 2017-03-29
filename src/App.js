import React, { Component } from 'react';
import Scroll from 'react-scroll';

import AboutUs from './components/AboutUs';
import BannerImage from './components/BannerImage';
import Header from './components/Header';
import Footer from './components/Footer';
import WeddingDetails from './components/WeddingDetails';
import Registry from './components/Registry';
import Rsvp from './components/Rsvp';

import './styles/App.scss';

// Scrolling library consts
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
          text='Sesha & Toni'
          counter={ true }
        />

        <Header
          handleSetActive={ this.handleSetActive }
        />

        <Element name='aboutUs' className='element about-us'>
          <div className='about-us-content-wrapper'>
            <AboutUs />
          </div>
        </Element>
        <Element name='details' className='element wedding-details'>
          <div className='wedding-details-content-wrapper'>
            <WeddingDetails
              className='wedding'
              title='Reception & Ceremony'
              location='National Tropical Botanical Gardens'
              address='4425 Lawai Rd, Koloa, HI 96756 '
              timeline='wedding'

            />
            <WeddingDetails
              className='rehearsal'
              title='Rehearsal Dinner'
              location='Poipu Beach House'
              address='another address, Koloa, HI 96756 '
            />
          </div>
        </Element>
        <Element name='rsvp' className='element rsvp'>
          <Rsvp />
        </Element>
        <Element name='registry' className='element registry'>
          <Registry />
        </Element>

        <Footer
        />
      </div>
    )
  }
};

export default App;
