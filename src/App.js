import './App.scss';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Scroll from 'react-scroll';


const Link = Scroll.Link;
const Element = Scroll.Element;
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

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="app">
        <div className='app-header'>

          <div className='header-menu'>
            <div className='menu-item home' onClick={ () => this.handleClick('/') }>
              <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Home</Link></li>
            </div>

            <div className='menu-item story' onClick={ () => this.handleClick('/venue') }>
              <div className='header-text'>Venue</div>
            </div>

            <div className='menu-item names' onClick={ () => this.handleClick('/accomodation') }>
              <div className='header-text'>Accomodation</div>
            </div>

            <div className='menu-item names' onClick={ () => this.handleClick('/day-of') }>
              <div className='header-text'>Day-of Details</div>
            </div>

            <div className='menu-item registry' onClick={ () => this.handleClick('/registry') }>
              <div className='header-text'>Registry</div>
            </div>
          </div>

          <Element name="test1" className="element" >
            Poo
          </Element>
          <Element name="test1" className="element" >
            On
          </Element>
          <Element name="test1" className="element" >
            You
          </Element>
          <Element name="test1" className="element" >
            Home
          </Element>
          <Element name="test1" className="element" >
            Home
          </Element>
        </div>
      </div>
    )
  }
};

export default App;
