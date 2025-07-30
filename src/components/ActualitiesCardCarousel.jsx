import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Box, 
  CardMedia, 
  Typography, 
  IconButton,
  Modal,
  Paper,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';
import actualitiesData from '../assets/actualitiesData';
import { useSwipeable } from 'react-swipeable';

const ActualityCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActuality, setSelectedActuality] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const modalContentRef = useRef(null);
  const theme = useTheme();

  // Memoize the handler functions
  const handleNextCardCallback = useCallback((e, autoScroll = false) => {
    if (e) e.stopPropagation();
    if (isTransitioning && !autoScroll) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % actualitiesData.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning]);

  const handleModalNavigationCallback = useCallback((direction) => {
    const navigateModal = async (direction) => {
      setLoading(true);
      
      // Find current actuality index in the data array
      const currentActualityIndex = actualitiesData.findIndex(
        item => selectedActuality && item.id === selectedActuality.id
      );
      
      // Calculate next index based on direction
      let nextIndex;
      if (direction === 'next') {
        nextIndex = (currentActualityIndex + 1) % actualitiesData.length;
      } else {
        nextIndex = currentActualityIndex === 0 
          ? actualitiesData.length - 1 
          : currentActualityIndex - 1;
      }
      
      // Get the next actuality
      const nextActuality = actualitiesData[nextIndex];
      setSelectedActuality(nextActuality);
      
      // Load content for the next actuality
      try {
        const response = await fetch(nextActuality.contentPath);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Failed to load markdown content:", error);
        setMarkdownContent('Failed to load content');
      } finally {
        setLoading(false);
      }
    };
    
    navigateModal(direction);
  }, [selectedActuality]);

  const handlePrevCardCallback = useCallback((e, autoScroll = false) => {
    if (e) e.stopPropagation();
    if (isTransitioning && !autoScroll) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? actualitiesData.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning]);

  const handleKeyDownCallback = useCallback((e) => {
    handleKeyDown(e);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    let interval;
    if (!isHovering && !modalOpen && !isTransitioning) {
      interval = setInterval(() => {
        handleNextCardCallback(null, true);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, modalOpen, isTransitioning, handleNextCardCallback]);

  // Handle manual navigation with transition management
  const handlePrevCard = (e, autoScroll = false) => {
    if (e) e.stopPropagation();
    if (isTransitioning && !autoScroll) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? actualitiesData.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match the transition duration in CSS
  };

  const handleNextCard = (e, autoScroll = false) => {
    if (e) e.stopPropagation();
    if (isTransitioning && !autoScroll) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % actualitiesData.length);
    
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

  const handleModalNavigation = (direction) => {
    handleModalNavigationCallback(direction);
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

  // Modal keyboard navigation
  useEffect(() => {
    const handleModalKeyDown = (e) => {
      if (modalOpen && !loading) {
        if (e.key === 'ArrowLeft') {
          handleModalNavigationCallback('prev');
        } else if (e.key === 'ArrowRight') {
          handleModalNavigationCallback('next');
        }
      }
    };

    document.addEventListener('keydown', handleModalKeyDown);
    return () => {
      document.removeEventListener('keydown', handleModalKeyDown);
    };
  }, [modalOpen, loading, selectedActuality, handleModalNavigationCallback]);

  // Setup keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownCallback);
    return () => {
      document.removeEventListener('keydown', handleKeyDownCallback);
    };
  }, [modalOpen, isTransitioning, handleKeyDownCallback]);

  // Touch swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextCard(null),
    onSwipedRight: () => handlePrevCard(null),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Modal swipe handlers for mobile users
  const modalSwipeHandlers = useSwipeable({
    onSwipedLeft: () => !loading && handleModalNavigation('next'),
    onSwipedRight: () => !loading && handleModalNavigation('prev'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
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
        marginTop: '72px',
        paddingY: { xs: 3, sm: 4, md: 5 },
        paddingX: { xs: 2, sm: 3, md: 4 },
      }}
      role="region"
      aria-label="Actuality carousel"
    >
      {/* Main carousel container */}
      <Box
        ref={carouselRef}
        {...swipeHandlers}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          aspectRatio: '16 / 9', // Consistent aspect ratio
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(40, 68, 115, 0.15)',
          background: 'linear-gradient(135deg, rgba(166, 203, 232, 0.1) 0%, rgba(40, 68, 115, 0.05) 100%)',
        }}
      >
        {/* Slides container */}
        <Box
          sx={{
            height: '100%',
            width: `${actualitiesData.length * 100}%`,
            display: 'flex',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(-${(currentIndex * 100) / actualitiesData.length}%)`,
          }}
        >
          {actualitiesData.map((actuality, index) => (
            <Box
              key={actuality.id}
              sx={{
                width: `${100 / actualitiesData.length}%`,
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
                '&:hover .content-overlay': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
                '&:hover .image': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => handleCardClick(actuality)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${actuality.title} - Slide ${index + 1} of ${actualitiesData.length}`}
              aria-hidden={currentIndex !== index}
            >
              {/* Background Image */}
              <CardMedia
                component="img"
                image={actuality.image}
                alt={`Image for ${actuality.title}`}
                className="image"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.6s ease',
                }}
              />

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(40, 68, 115, 0.8) 0%, rgba(40, 68, 115, 0.4) 50%, rgba(218, 165, 32, 0.3) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Content */}
              <Box
                className="content-overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: { xs: 3, sm: 4, md: 5 },
                  color: 'white',
                  zIndex: 2,
                  opacity: 0.9,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.9rem' },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    lineHeight: 1.2,
                  }}
                >
                  {actuality.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    opacity: 0.95,
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                    lineHeight: 1.5,
                    maxWidth: '80%',
                  }}
                >
                  {actuality.summary}
                </Typography>
              </Box>

              {/* Slide number indicator */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '12px',
                  padding: '8px 12px',
                  zIndex: 3,
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(40, 68, 115, 0.8)',
                    fontSize: '0.8rem',
                    fontWeight: 'medium',
                  }}
                >
                  {index + 1} / {actualitiesData.length}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          gap: 2,
        }}
      >
        {/* Previous Button */}
        <IconButton
          onClick={(e) => handlePrevCard(e)}
          disabled={isTransitioning}
          sx={{
            backgroundColor: 'rgba(40, 68, 115, 0.1)',
            color: 'rgba(40, 68, 115, 0.8)',
            border: '2px solid rgba(40, 68, 115, 0.2)',
            width: 48,
            height: 48,
            '&:hover': {
              backgroundColor: 'rgba(40, 68, 115, 0.15)',
              color: 'rgba(40, 68, 115, 1)',
              border: '2px solid rgba(40, 68, 115, 0.4)',
              transform: 'scale(1.05)',
            },
            '&:disabled': {
              opacity: 0.5,
            },
            transition: 'all 0.2s ease',
          }}
          aria-label="Previous slide"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* Pagination Dots */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
            backgroundColor: 'rgba(40, 68, 115, 0.05)',
            borderRadius: '24px',
            padding: '12px 20px',
            border: '1px solid rgba(40, 68, 115, 0.1)',
          }}
          role="tablist"
          aria-label="Carousel pagination"
        >
          {actualitiesData.map((_, index) => (
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
                width: currentIndex === index ? 24 : 12,
                height: 12,
                borderRadius: '6px',
                backgroundColor: currentIndex === index 
                  ? 'rgba(40, 68, 115, 0.8)' 
                  : 'rgba(40, 68, 115, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: currentIndex === index 
                    ? 'rgba(40, 68, 115, 1)' 
                    : 'rgba(40, 68, 115, 0.6)',
                  transform: 'scale(1.1)',
                },
              }}
            />
          ))}
        </Box>

        {/* Next Button */}
        <IconButton
          onClick={(e) => handleNextCard(e)}
          disabled={isTransitioning}
          sx={{
            backgroundColor: 'rgba(40, 68, 115, 0.1)',
            color: 'rgba(40, 68, 115, 0.8)',
            border: '2px solid rgba(40, 68, 115, 0.2)',
            width: 48,
            height: 48,
            '&:hover': {
              backgroundColor: 'rgba(40, 68, 115, 0.15)',
              color: 'rgba(40, 68, 115, 1)',
              border: '2px solid rgba(40, 68, 115, 0.4)',
              transform: 'scale(1.05)',
            },
            '&:disabled': {
              opacity: 0.5,
            },
            transition: 'all 0.2s ease',
          }}
          aria-label="Next slide"
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>

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
          ref={modalContentRef}
          {...modalSwipeHandlers}
          sx={{
            width: { xs: '90%', sm: '80%', md: '70%' },
            maxHeight: '90vh',
            p: 4,
            outline: 'none',
            
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
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
          
          {/* Previous button */}
          <IconButton
            aria-label="Previous actuality"
            onClick={() => handleModalNavigation('prev')}
            disabled={loading}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'rgba(40, 68, 115, 0.8)',
              width: 48,
              height: 48,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                color: 'rgba(40, 68, 115, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              '&:disabled': {
                opacity: 0.5,
              },
              transition: 'all 0.2s ease',
              zIndex: 1500,
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          
          {/* Next button */}
          <IconButton
            aria-label="Next actuality"
            onClick={() => handleModalNavigation('next')}
            disabled={loading}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'rgba(40, 68, 115, 0.8)',
              width: 48,
              height: 48,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                color: 'rgba(40, 68, 115, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              '&:disabled': {
                opacity: 0.5,
              },
              transition: 'all 0.2s ease',
              zIndex: 1500,
            }}
          >
            <KeyboardArrowRightIcon />
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
          
          {/* Optional: Pagination indicator showing position in actuality list */}
          {selectedActuality && (
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 3,
                gap: 1
              }}
            >
              {actualitiesData.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    if (!loading) {
                      const targetActuality = actualitiesData[index];
                      if (targetActuality.id !== selectedActuality.id) {
                        setLoading(true);
                        setSelectedActuality(targetActuality);
                        
                        fetch(targetActuality.contentPath)
                          .then(response => response.text())
                          .then(text => {
                            setMarkdownContent(text);
                          })
                          .catch(error => {
                            console.error("Failed to load markdown content:", error);
                            setMarkdownContent('Failed to load content');
                          })
                          .finally(() => {
                            setLoading(false);
                          });
                      }
                    }
                  }}
                  aria-label={`Go to actuality ${index + 1}`}
                  sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: selectedActuality.id === actualitiesData[index].id
                      ? 'rgba(0, 0, 0, 0.8)'
                      : 'rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Paper>
      </Modal>

    </Box>
  );
};

export default ActualityCardCarousel;