import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const images = [
    require('../assets/adbar/udv.png'),
    require('../assets/adbar/allampapirok.png'),
    require('../assets/adbar/szemelyi_kolcson.png'),
    require('../assets/adbar/karrier_lehetoseg.png'),
    require('../assets/adbar/hook.png'),
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
        height: { xs: '100px', sm: '200px', md: '250px', lg: '500px'}, // Set a fixed height for the slider
        overflow: 'hidden', // Hide overflowing images
        position: 'relative', // Position relative for inner absolute positioning
      }}
    >
      <Box
        sx={{
          transition: 'transform 1s ease-in-out',
          transform: `translateY(-${currentIndex * 100}%)`,
          width: '100%', // Ensure the slider takes up the full width
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
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
 // Prevent the image from shrinking
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;