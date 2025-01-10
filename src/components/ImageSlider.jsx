import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const images = [
    require('../assets/adbar/udv.png'),
    require('../assets/adbar/hook.png'),
    require('../assets/adbar/onyp_web.png'),
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '200px', // Set a fixed height for the slider
        overflow: 'hidden', // Hide overflowing images
        position: 'relative', // Position relative for inner absolute positioning
      }}
    >
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
          height: '100%', // Ensure the inner box takes full height
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the box
              flexShrink: 0, // Prevent the image from shrinking
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;