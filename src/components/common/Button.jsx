import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({
  children, 
  sx, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false
}) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'rgba(166, 203, 232, 0.9)',
          color: 'rgba(40, 68, 115, 0.9)',
          border: '1px solid rgba(166, 203, 232, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(166, 203, 232, 1)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(166, 203, 232, 0.4)',
          },
        }
      case 'accent':
        return {
          backgroundColor: 'rgba(218, 165, 32, 0.9)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(218, 165, 32, 1)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(218, 165, 32, 0.4)',
          },
        }
      default: // primary
        return {
          backgroundColor: 'rgba(40, 68, 115, 0.9)',
          color: 'rgb(254, 247, 255)',
          '&:hover': {
            backgroundColor: 'rgba(40, 68, 115, 1)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(40, 68, 115, 0.4)',
          },
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '8px 16px',
          fontSize: '0.85rem',
        }
      case 'large':
        return {
          padding: '14px 28px',
          fontSize: '1.1rem',
        }
      default: // medium
        return {
          padding: '12px 24px', // Increased from 10px 20px
          fontSize: '1rem',
        }
    }
  }

  return (
    <MuiButton
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        borderRadius: '12px',
        fontWeight: 600, // Added font weight
        textTransform: 'none', // Prevent uppercase
        letterSpacing: '0.3px', // Add letter spacing
        boxShadow: '0 3px 8px rgba(40, 68, 115, 0.2)', // Add shadow
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth transition
        '&:disabled': {
          opacity: 0.6,
          transform: 'none',
        },
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...sx, // Custom styles override everything
      }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  )
}

export default Button
