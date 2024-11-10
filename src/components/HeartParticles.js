// src/components/HeartParticles.js
import React from 'react';
import Particles from 'react-tsparticles';

const HeartParticles = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 30 },
          color: { value: "#ff69b4" },
          shape: {
            type: "image",
            image: { src: "/heart-icon.png", width: 50, height: 50 },
          },
          size: { value: 20 },
          opacity: { value: 0.6 },
          move: { enable: true, speed: 2, direction: "top" },
        },
      }}
    />
  );
};

export default HeartParticles;
