// src/Poem.js
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const PoemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; // Left, Center, Right
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 50px;
  background: #f0f0f0;
  min-height: 100vh;
`;

const Line = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
  line-height: 1.5;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: ${({ $isEven }) => ($isEven ? 'flex-start' : 'flex-end')};
  opacity: 0; // Initially hidden
  transform: translateY(20px); // Slide down effect
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  ${({ $isVisible }) => $isVisible && `
    opacity: 1; // Fade in effect
    transform: translateY(0); // Reset the position
  `}
`;

const Image = styled.img`
  width: 150px; // Adjust width as needed
  height: auto; // Maintain aspect ratio
  margin: 0 10px; // Optional spacing
`;

const Poem = ({ lines, images }) => {
  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(false));
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setVisibleImages((prev) => {
            const newVisibleImages = [...prev];
            newVisibleImages[index] = true;
            return newVisibleImages;
          });
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    // Copy refs to a variable
    const currentRefs = imageRefs.current;

    currentRefs.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      currentRefs.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, [images.length]);

  return (
    <PoemContainer>
      <div>
        {images.map((src, index) => {
          const isEven = index % 2 === 0; // Determine if the index is even or odd
          return (
            <ImageContainer key={index} $isEven={isEven} data-index={index} $isVisible={visibleImages[index]}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                ref={(el) => (imageRefs.current[index] = el)}
              />
            </ImageContainer>
          );
        })}
      </div>
      <div>
        {lines.map((line, index) => (
          <Line key={index}>{line}</Line>
        ))}
      </div>
      <div>
        {/* Empty div for right side spacing (optional, to align the grid) */}
      </div>
    </PoemContainer>
  );
};

export default Poem;
