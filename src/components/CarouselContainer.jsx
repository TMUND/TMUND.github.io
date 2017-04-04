import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import '../styles/CarouselContainer.scss';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo11.jpg';
import photo12 from '../assets/photo12.jpg';
import photo13 from '../assets/photo13.jpg';

export const CarouselContainer = (props) => {
  let sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='carousel-container'>
      <Slider { ...sliderSettings }>
        <img className='single-item' src={ photo1 } alt='wedding' />
        <img className='single-item' src={ photo2 } alt='wedding' />
        <img className='single-item' src={ photo3 } alt='wedding' />
        <img className='single-item' src={ photo4 } alt='wedding' />
        <img className='single-item' src={ photo5 } alt='wedding' />
        <img className='single-item' src={ photo6 } alt='wedding' />
        <img className='single-item' src={ photo7 } alt='wedding' />
        <img className='single-item' src={ photo8 } alt='wedding' />
        <img className='single-item' src={ photo9 } alt='wedding' />
        <img className='single-item' src={ photo10 } alt='wedding' />
        <img className='single-item' src={ photo11 } alt='wedding' />
        <img className='single-item' src={ photo12 } alt='wedding' />
        <img className='single-item' src={ photo13 } alt='wedding' />
      </Slider>
    </div>
  );
};

export default CarouselContainer;
