// src/components/PhotoCarousel.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; // Use a carousel library for easier image display
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  '/photos/photo1.png',
  '/photos/photo2.png',
  '/photos/photo3.png',
  '/photos/photo4.png',
  '/photos/photo5.png',
  '/photos/photo6.png',
  '/photos/photo7.png',
  '/photos/photo8.png',
  '/photos/photo9.png',
  '/photos/photo10.png',
  '/photos/photo11.png',
  '/photos/photo12.png',
  '/photos/photo13.png',
  '/photos/photo14.png',
  '/photos/photo15.png',
  '/photos/photo16.png',
  '/photos/photo17.png',
  '/photos/photo18.png',
  '/photos/photo19.png',
  '/photos/photo20.png',
  '/photos/photo21.png',
  '/photos/photo22.png',
];

const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {photos.map((src, index) => (
          <Photo key={index}>
            <img src={src} alt={`photo${index + 1}`} />
          </Photo>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Photo = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export default PhotoCarousel;
