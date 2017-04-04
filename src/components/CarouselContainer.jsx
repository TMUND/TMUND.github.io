import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import { carouselPhotos } from './modules/photos';

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
        <img className='single-item' src={ carouselPhotos.photo1 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo2 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo3 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo4 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo5 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo6 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo7 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo8 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo11 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo12 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo13 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo15 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo16 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo17 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo18 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo19 } alt="wedding" />
        <img className='single-item' src={ carouselPhotos.photo20 } alt="wedding" />
      </Slider>
    </div>
  );
};

export default CarouselContainer;
