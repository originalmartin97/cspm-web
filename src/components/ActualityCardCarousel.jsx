import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  IconButton,
  Modal,
  Paper,
  CardActionArea,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';
import actualityData from '../assets/actualityData';
import { useSwipeable } from 'react-swipeable';

const ActualityCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActuality, setSelectedActuality] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [controlsHovered, setControlsHovered] = useState(false);
  const carouselRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Auto-scroll effect
  useEffect(() => {
    let interval;
    if (!isHovering && !modalOpen && !isTransitioning && !controlsHovered) {
      interval = setInterval(() => {
        handleNextCard(null, true);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, modalOpen, isTransitioning, controlsHovered]);

  // Handle manual navigation with transition management
  const handlePrevCard = (e, autoScroll = false) => {
    if (e) e.stopPropagation();
    if (isTransitioning && !autoScroll) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? actualityData.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match the transition duration in CSS
  };

  const handleNextCard = (e, autoScroll = false) => {
    if (e) e.stopPropagation();
    if (isTransitioning && !autoScroll) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % actualityData.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match the transition duration in CSS
  };

  // Handle card click to open modal
  const handleCardClick = async (actuality) => {
    setSelectedActuality(actuality);
    setLoading(true);
    setModalOpen(true);
    
    try {
      const response = await fetch(actuality.contentPath);
      const text = await response.text();
      setMarkdownContent(text);
    } catch (error) {
      console.error("Failed to load markdown content:", error);
      setMarkdownContent('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedActuality(null);
    setMarkdownContent('');
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (modalOpen) return;
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      handlePrevCard(null);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      handleNextCard(null);
    }
  };

  // Setup keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, isTransitioning]);

  // Touch swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleNextCard(null),
    onSwipedDown: () => handlePrevCard(null),
    onSwipedLeft: () => isMobile && handleNextCard(null),
    onSwipedRight: () => isMobile && handlePrevCard(null),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Handle direct navigation to a specific slide
  const handleGoToSlide = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      role="region"
      aria-label="Actuality carousel"
    >
      {/* Main carousel container */}
      <Box
        ref={carouselRef}
        {...swipeHandlers}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => !controlsHovered && setIsHovering(false)}
        sx={{
          height: { xs: '200px', sm: '250px', md: '300px', lg: '400px' },
          transition: 'transform 1s ease-in-out',
          transform: `translateY(-${currentIndex * 100}%)`,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {actualityData.map((actuality, index) => (
          <Box 
            key={actuality.id}
            sx={{
              height: '100%',
              width: '100%',
              flexShrink: 0,
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${actuality.title} - Slide ${index + 1} of ${actualityData.length}`}
            aria-hidden={currentIndex !== index}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                },
              }}
              elevation={3}
            >
              <CardActionArea 
                onClick={() => handleCardClick(actuality)}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'stretch',
                  height: '100%',
                }}
                aria-label={`Read more about ${actuality.title}`}
              >
                <CardMedia
                  component="img"
                  image={actuality.image}
                  alt={`Image for ${actuality.title}`}
                  sx={{
                    height: { xs: '60%', md: '100%' },
                    width: { xs: '100%', md: '60%' },
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'brightness(1.05)',
                    },
                  }}
                />
                <CardContent 
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: { xs: '40%', md: '100%' },
                    width: { xs: '100%', md: '40%' },
                    bgcolor: 'rgba(254, 247, 255, 0.9)',
                    padding: { xs: 2, md: 3 },
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                    }}
                  >
                    {actuality.title}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      fontSize: { sm: '0.9rem', md: '1rem' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      display: '-webkit-box',
                    }}
                  >
                    {actuality.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Navigation controls */}
      <Box
        sx={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: {
            xs: 'none',
            sm: isHovering || controlsHovered ? 'flex' : 'none',
          },
          flexDirection: 'column',
          gap: '10px',
          opacity: isHovering || controlsHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 2,
        }}
        onMouseEnter={() => setControlsHovered(true)}
        onMouseLeave={() => setControlsHovered(false)}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handlePrevCard(e);
          }}
          size="large"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: 'white',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.45)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
          aria-label="Previous slide"
        >
          <KeyboardArrowUpIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleNextCard(e);
          }}
          size="large"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: 'white',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.45)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
          aria-label="Next slide"
        >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Pagination indicators */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '10px',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 2,
        }}
        role="tablist"
        aria-label="Carousel pagination"
      >
        {actualityData.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleGoToSlide(index)}
            role="tab"
            aria-selected={currentIndex === index}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleGoToSlide(index);
              }
            }}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index 
                ? 'rgba(0, 0, 0, 0.8)' 
                : 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background-color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: currentIndex === index 
                  ? 'rgba(0, 0, 0, 0.8)' 
                  : 'rgba(255, 255, 255, 0.8)',
              },
            }}
          />
        ))}
      </Box>

      {/* Mobile swipe hint - only shows briefly when component mounts */}
      {isMobile && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            pointerEvents: 'none',
            animation: 'fadeOut 3s forwards',
            '@keyframes fadeOut': {
              '0%': { opacity: 1 },
              '70%': { opacity: 1 },
              '100%': { opacity: 0 }
            },
          }}
        >
          Swipe up/down to navigate
        </Box>
      )}

      {/* Modal for displaying full actuality content */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="actuality-modal-title"
        aria-describedby="actuality-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            width: { xs: '90%', sm: '80%', md: '70%' },
            maxHeight: '90vh',
            p: 4,
            outline: 'none',
            borderRadius: '8px',
            boxShadow: 24,
            position: 'relative',
            overflow: 'auto',
            animation: 'modalFadeIn 0.3s ease-out',
            '@keyframes modalFadeIn': {
              '0%': { opacity: 0, transform: 'scale(0.9)' },
              '100%': { opacity: 1, transform: 'scale(1)' }
            },
          }}
          role="dialog"
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress aria-label="Loading content" />
            </Box>
          ) : selectedActuality && (
            <>
              <Typography 
                variant="h4" 
                component="h2"
                id="actuality-modal-title"
                sx={{ 
                  mb: 3,
                  fontWeight: 'bold',
                  pr: 4, // Space for close button
                }}
              >
                {selectedActuality.title}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <CardMedia
                  component="img"
                  image={selectedActuality.image}
                  alt={`Full image for ${selectedActuality.title}`}
                  sx={{
                    maxHeight: '300px',
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: '4px',
                  }}
                />
              </Box>
              
              <Box 
                id="actuality-modal-description"
                sx={{ 
                  '& a': { 
                    color: '#467886',
                    textDecoration: 'underline',
                  },
                  '& ul, & ol': {
                    pl: 3,
                  },
                }}
              >
                <ReactMarkdown
                  components={{
                    a: ({ node, ...props }) => (
                      <a {...props} target="_blank" rel="noopener noreferrer">
                        {props.children}
                      </a>
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </Box>
            </>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default ActualityCardCarousel;