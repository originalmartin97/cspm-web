import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography, Modal, Paper, IconButton, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import colleaguesData from '../assets/colleaguesData'

const Colleagues = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedColleague, setSelectedColleague] = useState(null)

  const handleCardClick = (colleague) => {
    setSelectedColleague(colleague)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedColleague(null)
  }

  return (
    <>
      <Grid container spacing={6}
          sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch', // Changed to stretch for equal heights
              marginTop: '16px',
          }}
      >
        {colleaguesData
        .sort((a,b) => a.id - b.id) // Sort colleagues by id
        .map((colleague) => (
          <Grid item xs={12} md={6} lg={4} key={colleague.id} sx={{ display: 'flex' }}>
            <Card
              onClick={() => handleCardClick(colleague)}
              sx={{
                maxWidth: 345,
                width: '100%',
                height: '100%', // Ensure all cards have equal height
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease',
                borderRadius: '16px',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  '& .hover-indicator': {
                    opacity: 1,
                  },
                },
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(colleague);
                  e.preventDefault();
                }
              }}
            >
              {/* Hover indicator */}
              <Box
                className="hover-indicator"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                  backgroundColor: 'rgba(40, 68, 115, 0.9)', // Using brand color
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(40, 68, 115, 0.3)', // Using brand color for shadow
                }}
              >
                <VisibilityIcon sx={{ color: 'rgb(254, 247, 255)', fontSize: 20 }} />
              </Box>
              <CardMedia
                sx={{ 
                  height: 240, // Fixed height for consistent card appearance
                  objectFit: 'cover'
                }}
                component="img"
                src={colleague.image}
                alt={`Portrait of ${colleague.name}`}
              />
              <CardContent
                sx={{ 
                  display: 'flex',
                  textAlign: 'center',
                  flexDirection: 'column',
                  flexGrow: 1, // Allow content to fill remaining space
                  p: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: 2 }}
                >
                  {colleague.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    textAlign: 'justify', 
                    flexGrow: 1,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 4, // Limit to 4 lines for consistency
                    WebkitBoxOrient: 'vertical',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: colleague.shortDescription.replace(/\n/g, '<br />')
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying full colleague details */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="colleague-modal-title"
        aria-describedby="colleague-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
            maxHeight: '90vh',
            p: { xs: 3, sm: 4, md: 5 }, // Responsive padding
            outline: 'none',
            borderRadius: '20px', // Increased from default
            boxShadow: '0 20px 60px rgba(40, 68, 115, 0.25)', // Enhanced shadow
            position: 'relative',
            overflow: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.98)', // Slightly transparent
            backdropFilter: 'blur(20px)', // Add backdrop filter
            border: '1px solid rgba(255, 255, 255, 0.2)', // Add border
            animation: 'modalFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // Improved timing
            '@keyframes modalFadeIn': {
              '0%': { opacity: 0, transform: 'scale(0.85) translateY(20px)' }, // More natural entrance
              '100%': { opacity: 1, transform: 'scale(1) translateY(0)' }
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
          
          {selectedColleague && (
            <>
              <Typography 
                variant="h4" 
                component="h2"
                id="colleague-modal-title"
                sx={{ 
                  mb: 3,
                  fontWeight: 'bold',
                  pr: 4, // Space for close button
                  textAlign: 'center'
                }}
              >
                {selectedColleague.name}
              </Typography>
              
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  image={selectedColleague.image}
                  alt={`Portrait of ${selectedColleague.name}`}
                  sx={{
                    maxHeight: '300px',
                    maxWidth: '300px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              
              <Typography
                id="colleague-modal-description"
                variant="body1"
                sx={{ 
                  textAlign: 'justify',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {selectedColleague.longDescription}
              </Typography>
            </>
          )}
        </Paper>
      </Modal>
    </>
  )
}

export default Colleagues