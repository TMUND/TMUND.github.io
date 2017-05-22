import React, { Component } from 'react';
import Scroll from 'react-scroll';

import AboutUs from './components/AboutUs';
import BannerImage from './components/BannerImage';
import Header from './components/Header';
import Footer from './components/Footer';
import WeddingDetails from './components/WeddingDetails';
import Registry from './components/Registry';
import Rsvp from './components/Rsvp';
import CarouselContainer from './components/CarouselContainer';
import WeatherIcon from './components/WeatherIcon';
import './styles/App.scss';

// Images
import ntbg from './assets/ntbg.jpg';
import poipuHouse from './assets/poipu_house.jpg';
import naPali from './assets/na_pali_coast.jpg';
import hammock from './assets/hammock.jpg';

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
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
    });

    Events.scrollEvent.register('end', function() {
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
            <div className='text'>
              <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tincidunt nibh. Curabitur elementum id erat at venenatis. Etiam pellentesque aliquet enim ut scelerisque. Donec maximus imperdiet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel consectetur libero. Duis molestie dignissim felis, tincidunt convallis ex semper sed. Morbi efficitur odio id varius mollis. Maecenas at nulla ut tellus viverra vestibulum at id lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tortor tortor, cursus ac eros quis, finibus ultrices tellus. Proin suscipit quam libero, quis commodo velit pretium dapibus. Maecenas ultrices vitae leo sed lobortis. Ut imperdiet pellentesque mollis. Etiam odio leo, imperdiet nec neque id, placerat viverra nisl. Nam facilisis consectetur magna, mollis gravida nisi suscipit et.</div>
            </div>
            <AboutUs />
            <div className='divider'></div>
            <CarouselContainer />
          </div>
        </Element>

        <Element name='details' className='element wedding-details'>
          <div className='wedding-details-content-wrapper'>
            <WeddingDetails
              className='wedding'
              title='Reception & Ceremony'
              location='National Tropical Botanical Gardens'
              address='4425 Lawai Rd, Koloa, HI 96756'
              timeline='wedding'
              imageAfter={ ntbg }
            />
            <WeddingDetails
              className='rehearsal'
              title='Rehearsal Dinner'
              location='Poipu Beach House'
              address='2250 Kauai Rd, Koloa, HI 96756 '
              timeline='rehearsal'
              imageBefore={ poipuHouse }
            />
            <WeddingDetails
              className='activities'
              title='Island Activities'
              location="*We can recommend from our experience! Please let us know if you'd like more info!"
              timeline='activities'
              imageAfter={ naPali }
            />
            <WeddingDetails
              className='accomodation'
              title='Where to Stay'
              location='*North: rain more likely || *East: less populated || South: touristy || *West: Dry & Windy'
              imageBefore={ hammock }
            />
          </div>
        </Element>

        <Element name='weather' className='element weather'>
          <div className='weather-icon-content-wrapper'>
            <WeatherIcon
            />
          </div>
        </Element>

        <Element name='rsvp' className='element rsvp'>
          <Rsvp />
          <div className='divider'></div>
          <Registry />
        </Element>

        <Footer
        />
      </div>
    )
  }
};

export default App;
