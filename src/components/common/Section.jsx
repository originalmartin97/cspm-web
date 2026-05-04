import React from 'react'
import { Box } from '@mui/material'

const Section = ({ children, id, sx, variant = 'default' }) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          backgroundColor: 'rgba(166, 203, 232, 0.08)',
          padding: { xs: '24px', sm: '32px', md: '40px' },
        }
      case 'highlight':
        return {
          backgroundColor: 'rgba(218, 165, 32, 0.05)',
          padding: { xs: '20px', sm: '28px', md: '36px' },
        }
      default:
        return {
          backgroundColor: 'rgba(166, 203, 232, 0.05)', // Reduced opacity
          padding: { xs: '16px', sm: '24px', md: '32px' }, // Responsive padding
        }
    }
  }

  return (
    <Box
      id={id}
      sx={{
        borderRadius: '16px', // Increased from 8px
        boxShadow: '0 4px 20px rgba(40, 68, 115, 0.08)', // Softer shadow
        marginTop: '24px', // Increased from 16px
        marginLeft: '0',
        marginRight: '0',
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid rgba(40, 68, 115, 0.06)', // Add subtle border
        backdropFilter: 'blur(8px)', // Add backdrop filter
        transition: 'all 0.3s ease', // Add transition
        '&:hover': {
          boxShadow: '0 6px 24px rgba(40, 68, 115, 0.12)', // Enhance shadow on hover
        },
        ...getVariantStyles(),
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Section
