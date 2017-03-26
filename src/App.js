import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Scroll from 'react-scroll';

import BannerImage from './components/BannerImage';

import './styles/BannerImage.scss';
import './styles/App.scss';


// const Link = Scroll.Link;
// const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;


class App extends Component {
  durationFn(deltaTop) {
    return deltaTop;
  }

  handleClick(route) {
    browserHistory.push(route);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
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
      </div>
    )
  }
};

export default App;
