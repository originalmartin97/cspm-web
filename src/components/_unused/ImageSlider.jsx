import React, { useState, useEffect } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const images = [
    require('../assets/adbar/cspm_fb_ad_01.png'),
    /* require('../assets/adbar/udv.png'), */
    require('../assets/adbar/allampapirok.png'),
    require('../assets/adbar/szemelyi_kolcson.png'),
    require('../assets/adbar/karrier_lehetoseg.png'),
    require('../assets/adbar/hook.png'),
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    if(!isHovering) {
      // Change image every 5 seconds
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [isHovering])

  // Handle opening the modal
  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  }

  // Handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  }

  // Handle manual navigation
  const handlePrevImage = (e) => {
    e.stopPropagation(); // Preventing modal popup
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <Box
      sx={{
        height: { xs: '100px', sm: '200px', md: '250px', lg: '500px'}, // Set a fixed height for the slider
        overflow: 'hidden', // Hide overflowing images
        position: 'relative', // Position relative for inner absolute positioning
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                boxShadow: 'inset 0 0 50px 12px rgba(0, 0, 0, 0.5)', // Vignette effect
                zIndex: 1,
              },
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                boxShadow: 'inset 0 0 50px 12px rgba(0, 0, 0, 0.7)', // Darker vignette effect
                zIndex: 1,
              },
            }}
            onClick={() => handleOpenModal(image)}
          >
            <Box
              component="img"
              src={image}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensure the image covers the box
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons visible only while hover is true & sm or above */}
      <Box
        sx={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: {
            xs: 'none',
            sm : isHovering ? 'flex' : 'none',
          },
          flexDirection: 'column',
          gap: '10px',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={handlePrevImage}
          size="large"
          sx={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            boxShadow: '0px 0px 8px rgba(0,0,0,0.45)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
          >
          <KeyboardArrowUpIcon fontSize="inherit" />
          </IconButton>

        <IconButton
          onClick={handleNextImage}
          size="large"
          sx={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            boxShadow: '0px 0px 8px rgba(0,0,0,0.45)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Modal for showing the full image */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="full-size-image-view"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        disableAutoFocus
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain', // Ensure the entire image is visible
                display: 'block',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          )}
          <Box
            sx={{
              content: '""',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(3px)',
              zIndex: -1,
            }}
            onClick={handleCloseModal}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageSlider;