import React from 'react'
import { Typography } from '@mui/material'

const MyTypography = ({ children, sx }) => {
  return (
    <Typography
      sx={{
        fontSize: '24px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: '16px',
        ...sx, // Spread the sx prop to override default styles if provided
      }}
    >
      {children}
    </Typography>
  )
}

export default MyTypography
