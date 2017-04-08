import React, { Component } from 'react';
import Scroll from 'react-scroll';
import '../styles/Header.scss';


const Link = Scroll.Link;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    if (event.srcElement.body.scrollTop > 800) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <div className='app-header'>
        <div className={ (this.state.scrolled) ? 'header-menu shrink' : 'header-menu' }>
          <Link
            className='menu-item'
            activeClass='active'
            to='aboutUs'
            spy={true}
            smooth={true}
            offset={-54}
            duration={500}
            onSetActive={this.props.handleSetActive}
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
            onSetActive={this.props.handleSetActive}
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
            onSetActive={this.props.handleSetActive}
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
            onSetActive={this.props.handleSetActive}
          >
            <div className='header-text'>Registry</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
