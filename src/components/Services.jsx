import React, { useState } from 'react'
import { Card, CardContent, Typography, Modal, Paper, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import MyTypography from './MyTypography'
import servicesData from '../assets/servicesData'

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
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            my: '8px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              '& .hover-indicator': {
                opacity: 1,
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
              transition: 'opacity 0.3s ease',
              zIndex: 1,
              backgroundColor: 'rgba(40, 68, 115, 0.9)', // Using brand color
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(40, 68, 115, 0.3)', // Using brand color for shadow
            }}
          >
            <InfoOutlinedIcon sx={{ color: 'rgb(254, 247, 255)', fontSize: 18 }} />
          </Box>
          <CardContent>
            <MyTypography
              sx={{
                fontSize: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              {service.title}
            </MyTypography>
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
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
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