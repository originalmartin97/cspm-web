import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [controlsHovered, setControlsHovered] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const carouselRef = useRef(null);
  const modalContentRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Memoize the handler functions
  const handleNextCardCallback = useCallback((e, autoScroll = false) => {
    handleNextCard(e, autoScroll);
  }, []);

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

  const handleKeyDownCallback = useCallback((e) => {
    handleKeyDown(e);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    let interval;
    if (!isHovering && !modalOpen && !isTransitioning && !controlsHovered) {
      interval = setInterval(() => {
        handleNextCardCallback(null, true);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, modalOpen, isTransitioning, controlsHovered, handleNextCardCallback]);

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
    // Only use vertical swipes on desktop
    onSwipedUp: () => !isMobile && handleNextCard(null),
    onSwipedDown: () => !isMobile && handlePrevCard(null),
    // Use horizontal swipes on all devices, but they're especially important for mobile
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

  // Mouse move handler for modal navigation buttons - Improved implementation
  const handleModalMouseMove = (e) => {
    if (!modalContentRef.current || loading) return;

    // Make the buttons more persistent by tracking the entire document
    const modalRect = modalContentRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    
    // Check if we're near the left or right edge of the screen
    const windowWidth = window.innerWidth;
    const edgeThreshold = Math.min(150, windowWidth * 0.15); // 15% of window width or 150px max
    
    // Show left button when near the left edge of the screen
    setShowLeftButton(mouseX < edgeThreshold || 
                     (mouseX > modalRect.left && mouseX < modalRect.left + modalRect.width * 0.3));
    
    // Show right button when near the right edge of the screen
    setShowRightButton(mouseX > windowWidth - edgeThreshold || 
                      (mouseX > modalRect.left + modalRect.width * 0.7 && mouseX < modalRect.right));
  };

  // Replace handleModalMouseLeave with this less aggressive version
  const handleModalMouseLeave = (e) => {
    // Only hide buttons if the mouse left the entire window
    // This ensures buttons remain visible when moving mouse toward them
    if (e.clientX <= 0 || e.clientX >= window.innerWidth || 
        e.clientY <= 0 || e.clientY >= window.innerHeight) {
      setShowLeftButton(false);
      setShowRightButton(false);
    }
  };

  // Make modal navigation buttons always visible for some time after any user interaction
  useEffect(() => {
    if (modalOpen) {
      // Show buttons whenever modal is open
      setShowLeftButton(true);
      setShowRightButton(true);
      
      // Ensure document-level mouse movement tracking
      document.addEventListener('mousemove', handleModalMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleModalMouseMove);
      };
    }
  }, [modalOpen]);

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
        marginTop: '72px',
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
          transform: isMobile 
            ? `translateX(-${currentIndex * 100}%)` // Horizontal translation for mobile
            : `translateY(-${currentIndex * 100}%)`, // Vertical translation for desktop
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
        }}
      >
        {actualitiesData.map((actuality, index) => (
          <Box 
            key={actuality.id}
            sx={{
              height: '100%',
              width: '100%',
              flexShrink: 0,
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${actuality.title} - Slide ${index + 1} of ${actualitiesData.length}`}
            aria-hidden={currentIndex !== index}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                borderRadius: 0,
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
                      WebkitBoxDisplay: '-webkit-box',
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
          Swipe left/right to navigate
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
          ref={modalContentRef}
          {...modalSwipeHandlers}
          // Remove onMouseMove since we're using document-level tracking
          onMouseLeave={(e) => handleModalMouseLeave(e)}
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
          
          {/* Previous button - positioned on left side with improved visibility */}
          <IconButton
            aria-label="Previous actuality"
            onClick={() => handleModalNavigation('prev')}
            disabled={loading}
            sx={{
              position: 'fixed', // Changed to fixed positioning
              left: { xs: 8, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)', // Darker for better visibility
              color: 'white',
              padding: { xs: '8px', sm: '12px' }, // Larger clickable area
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
              transition: 'opacity 0.3s ease, background-color 0.2s ease',
              opacity: isMobile || showLeftButton ? 0.9 : 0.3, // Always somewhat visible
              visibility: 'visible', // Always visible
              zIndex: 1500, // Higher z-index to ensure it's above other content
            }}
          >
            <KeyboardArrowLeftIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
          
          {/* Next button - positioned on right side with improved visibility */}
          <IconButton
            aria-label="Next actuality"
            onClick={() => handleModalNavigation('next')}
            disabled={loading}
            sx={{
              position: 'fixed', // Changed to fixed positioning
              right: { xs: 8, sm: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)', // Darker for better visibility
              color: 'white',
              padding: { xs: '8px', sm: '12px' }, // Larger clickable area
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
              transition: 'opacity 0.3s ease, background-color 0.2s ease',
              opacity: isMobile || showRightButton ? 0.9 : 0.3, // Always somewhat visible
              visibility: 'visible', // Always visible
              zIndex: 1500, // Higher z-index to ensure it's above other content
            }}
          >
            <KeyboardArrowRightIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
          
          {/* Mobile swipe hint - only shows briefly when modal opens on mobile */}
          {isMobile && modalOpen && (
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
                animation: 'fadeOut 2s forwards',
                animationDelay: '1s',
                zIndex: 10,
                '@keyframes fadeOut': {
                  '0%': { opacity: 1 },
                  '100%': { opacity: 0 }
                },
              }}
            >
              Swipe left/right to navigate
            </Box>
          )}

          {/* Desktop navigation hint - only shows briefly when modal opens on desktop */}
          {!isMobile && modalOpen && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                gap: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                pointerEvents: 'none',
                animation: 'fadeOut 2s forwards',
                animationDelay: '1s',
                zIndex: 10,
                '@keyframes fadeOut': {
                  '0%': { opacity: 1 },
                  '100%': { opacity: 0 }
                },
              }}
            >
              <KeyboardArrowLeftIcon /> Navigate with mouse or arrow keys <KeyboardArrowRightIcon />
            </Box>
          )}
          
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

      {/* Persistent navigation buttons for mobile */}
      {isMobile && !modalOpen && ( // Only show when modal is closed
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            zIndex: 15,
          }}
        >
          <IconButton
            aria-label="Previous actuality (mobile)"
            onClick={(e) => handlePrevCard(e)} // Fixed: use handlePrevCard instead
            disabled={isTransitioning}
            sx={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.6)',
              },
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            aria-label="Next actuality (mobile)"
            onClick={(e) => handleNextCard(e)} // Fixed: use handleNextCard instead
            disabled={isTransitioning}
            sx={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.6)',
              },
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default ActualityCardCarousel;