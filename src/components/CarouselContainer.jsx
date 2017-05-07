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
import photo14 from '../assets/photo14.jpg';
import photo15 from '../assets/photo15.jpg';
import photo16 from '../assets/photo16.jpg';
import photo17 from '../assets/photo17.jpg';
import photo18 from '../assets/photo18.jpg';
import photo19 from '../assets/photo19.jpg';
import photo20 from '../assets/photo20.jpg';
import photo21 from '../assets/photo21.jpg';
import photo22 from '../assets/photo22.jpg';
import photo23 from '../assets/photo23.jpg';
import photo24 from '../assets/photo24.jpg';
import photo25 from '../assets/photo25.jpg';
import photo26 from '../assets/photo26.jpg';
import photo27 from '../assets/photo27.jpg';
import photo28 from '../assets/photo28.jpg';
import photo29 from '../assets/photo29.jpg';
import photo30 from '../assets/photo30.jpg';
import photo31 from '../assets/photo31.jpg';
import photo32 from '../assets/photo32.jpg';
import photo33 from '../assets/photo33.jpg';
import photo34 from '../assets/photo34.jpg';
import photo35 from '../assets/photo35.jpg';
import photo36 from '../assets/photo36.jpg';
import photo37 from '../assets/photo37.jpg';
import photo38 from '../assets/photo38.jpg';
import photo39 from '../assets/photo39.jpg';
import photo40 from '../assets/photo40.jpg';
import photo41 from '../assets/photo41.jpg';
import photo42 from '../assets/photo42.jpg';
import photo43 from '../assets/photo43.jpg';
import photo44 from '../assets/photo44.jpg';
import photo45 from '../assets/photo45.jpg';
import photo46 from '../assets/photo46.jpg';
import photo47 from '../assets/photo47.jpg';
import photo48 from '../assets/photo48.jpg';
import photo49 from '../assets/photo49.jpg';
import photo50 from '../assets/photo50.jpg';
import photo51 from '../assets/photo51.jpg';
import photo52 from '../assets/photo52.jpg';


export const CarouselContainer = (props) => {
  let sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  };

  return (
    <div className='carousel-container'>
      <Slider { ...sliderSettings }>
        {  }
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
        <img className='single-item' src={ photo14 } alt='wedding' />
        <img className='single-item' src={ photo15 } alt='wedding' />
        <img className='single-item' src={ photo16 } alt='wedding' />
        <img className='single-item' src={ photo17 } alt='wedding' />
        <img className='single-item' src={ photo18 } alt='wedding' />
        <img className='single-item' src={ photo19 } alt='wedding' />
        <img className='single-item' src={ photo20 } alt='wedding' />
        <img className='single-item' src={ photo21 } alt='wedding' />
        <img className='single-item' src={ photo22 } alt='wedding' />
        <img className='single-item' src={ photo23 } alt='wedding' />
        <img className='single-item' src={ photo24 } alt='wedding' />
        <img className='single-item' src={ photo25 } alt='wedding' />
        <img className='single-item' src={ photo26 } alt='wedding' />
        <img className='single-item' src={ photo27 } alt='wedding' />
        <img className='single-item' src={ photo28 } alt='wedding' />
        <img className='single-item' src={ photo29 } alt='wedding' />
        <img className='single-item' src={ photo30 } alt='wedding' />
        <img className='single-item' src={ photo31 } alt='wedding' />
        <img className='single-item' src={ photo32 } alt='wedding' />
        <img className='single-item' src={ photo33 } alt='wedding' />
        <img className='single-item' src={ photo34 } alt='wedding' />
        <img className='single-item' src={ photo35 } alt='wedding' />
        <img className='single-item' src={ photo36 } alt='wedding' />
        <img className='single-item' src={ photo37 } alt='wedding' />
        <img className='single-item' src={ photo38 } alt='wedding' />
        <img className='single-item' src={ photo39 } alt='wedding' />
        <img className='single-item' src={ photo40 } alt='wedding' />
        <img className='single-item' src={ photo41 } alt='wedding' />
        <img className='single-item' src={ photo42 } alt='wedding' />
        <img className='single-item' src={ photo43 } alt='wedding' />
        <img className='single-item' src={ photo44 } alt='wedding' />
        <img className='single-item' src={ photo45 } alt='wedding' />
        <img className='single-item' src={ photo46 } alt='wedding' />
        <img className='single-item' src={ photo47 } alt='wedding' />
        <img className='single-item' src={ photo48 } alt='wedding' />
        <img className='single-item' src={ photo49 } alt='wedding' />
        <img className='single-item' src={ photo50 } alt='wedding' />
        <img className='single-item' src={ photo51 } alt='wedding' />
        <img className='single-item' src={ photo52 } alt='wedding' />
      </Slider>
    </div>
  );
};

export default CarouselContainer;
