import React from 'react'
import { Typography as MuiTypography } from '@mui/material'

const Typography = ({ 
  children, 
  sx, 
  variant = "h4", 
  component = "h2",
  showUnderline = true,
  textAlign = 'center'
}) => {
  return (
    <MuiTypography
      variant={variant}
      component={component}
      sx={{
        fontWeight: 700,
        textAlign: textAlign,
        padding: '20px 16px', // Increased from 16px 12px
        fontStyle: 'normal',
        color: 'rgba(40, 68, 115, 0.9)',
        fontSize: { 
          xs: '1.9rem', // Slightly increased 
          sm: '2.2rem', 
          md: '2.5rem',
          lg: '2.8rem' 
        },
        letterSpacing: '0.6px', // Increased from 0.5px
        textShadow: '0 2px 4px rgba(40, 68, 115, 0.15)', // Stronger shadow
        position: 'relative',
        marginBottom: '8px', // Add consistent bottom margin
        ...(showUnderline && {
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            width: '80px', // Increased from 60px
            height: '4px', // Increased from 3px
            backgroundColor: 'rgba(218, 165, 32, 0.7)', // Slightly more opaque
            borderRadius: '3px', // Increased from 2px
            transform: 'translateX(-50%)',
          }
        }),
        ...sx, // Spread the sx prop to override default styles if provided
      }}
    >
      {children}
    </MuiTypography>
  )
}

export default Typography
