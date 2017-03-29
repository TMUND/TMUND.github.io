import React from 'react';
import Scroll from 'react-scroll';
import '../styles/Header.scss';


const Link = Scroll.Link;


export const Header = (props) => {
  return (
    <div className='app-header'>
      <div className='header-menu'>
        <Link
          className='menu-item'
          activeClass='active'
          to='aboutUs'
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          onSetActive={props.handleSetActive}
        >
          <div className='header-text'>Our Story</div>
        </Link>

        <Link
          className='menu-item'
          activeClass='active'
          to='details'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={props.handleSetActive}
        >
          <div className='header-text'>Details</div>
        </Link>

        <Link
          className='menu-item'
          activeClass='active'
          to='rsvp'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={props.handleSetActive}
        >
          <div className='header-text'>RSVP</div>
        </Link>

        <Link
          className='menu-item'
          activeClass='active'
          to='registry'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={props.handleSetActive}
        >
          <div className='header-text'>Registry</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
