import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  margin: 10px;
  transform: ${props => (props.side === 'left' ? 'rotate(-5deg)' : 'rotate(5deg)')}; /* Tilt images */
  width: 100%; /* Ensures images take full width */
`;

const PhotoSlide = ({ photo, index, side }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerHeight = index * 200; // Adjust based on the index to stagger the images

      // Check if the scroll position is past a certain point to make the image visible
      if (scrollY + windowHeight > triggerHeight) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);

  return (
    <ImageContainer visible={visible} side={side}>
      <img src={photo} alt="couple" style={{ width: '100%', borderRadius: '15px' }} />
    </ImageContainer>
  );
};

export default PhotoSlide;
