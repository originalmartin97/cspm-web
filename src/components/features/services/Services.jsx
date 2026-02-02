import React, { useState } from 'react'
import { Card, CardContent, Modal, Paper, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Typography from '../../common/Typography'
import servicesData from '../../../data/services'

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleCardClick = (service) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      {servicesData.map((service, index) => (
        <Card key={index}
          onClick={() => handleCardClick(service)}
          sx={{
            boxShadow: '0px 4px 8px rgba(40, 68, 115, 0.12)',
            borderRadius: '16px', // Consistent with other components
            my: '12px', // Increased spacing
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid rgba(40, 68, 115, 0.08)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 20px rgba(40, 68, 115, 0.18)',
              borderColor: 'rgba(40, 68, 115, 0.15)',
              '& .hover-indicator': {
                opacity: 1,
                transform: 'scale(1.1)',
              },
            },
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardClick(service);
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
              transition: 'all 0.3s ease',
              zIndex: 1,
              backgroundColor: 'rgba(40, 68, 115, 0.9)',
              borderRadius: '50%',
              width: 40, // Consistent with Colleagues
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(40, 68, 115, 0.25)',
            }}
          >
            <InfoOutlinedIcon sx={{ color: 'rgb(254, 247, 255)', fontSize: 20 }} />
          </Box>
          <CardContent>
            <Typography
              sx={{
                fontSize: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              {service.title}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* Modal for displaying full service details */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
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
            p: { xs: 3, sm: 4, md: 5 }, // Responsive padding
            outline: 'none',
            borderRadius: '20px', // Consistent with Colleagues
            boxShadow: '0 20px 60px rgba(40, 68, 115, 0.25)', // Enhanced shadow
            position: 'relative',
            overflow: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.98)', // Slightly transparent
            backdropFilter: 'blur(20px)', // Add backdrop filter
            border: '1px solid rgba(255, 255, 255, 0.2)', // Add border
            animation: 'modalFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // Consistent timing
            '@keyframes modalFadeIn': {
              '0%': { opacity: 0, transform: 'scale(0.85) translateY(20px)' },
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
          
          {selectedService && (
            <>
              <Typography 
                variant="h4" 
                component="h2"
                id="service-modal-title"
                sx={{ 
                  mb: 3,
                  fontWeight: 'bold',
                  pr: 4, // Space for close button
                  textAlign: 'center'
                }}
              >
                {selectedService.title}
              </Typography>
              
              <Typography
                id="service-modal-description"
                variant="body1"
                sx={{ 
                  textAlign: 'justify',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
                dangerouslySetInnerHTML={{
                  __html: (selectedService.description || '').replace(/\n/g, '<br />')
                }}
              />
            </>
          )}
        </Paper>
      </Modal>
    </>
  )
}

export default Services