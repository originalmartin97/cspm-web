import React from 'react'
import { Typography } from '@mui/material'

const MyTypography = ({ children, sx }) => {
  return (
    <Typography
      sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '16px',
        fontStyle: 'normal',
        fontSize: '2rem',
        ...sx, // Spread the sx prop to override default styles if provided
      }}
    >
      {children}
    </Typography>
  )
}

export default MyTypography
