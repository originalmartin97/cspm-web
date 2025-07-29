import React from 'react'
import { Box } from '@mui/material'

const Section = ({ children, id, sx }) => {
  return (
    <>
      <Box
        id={id}
        sx={{
          padding: '8px',
          borderRadius: '8px',
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
          marginTop: '16px',
          marginLeft: '0',
          marginRight: '0',
          maxWidth: '100%',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: 'rgb(195, 224, 228, 0.7)',
          ...sx,
        }}
      >
        { children }
      </Box>
    </>
  )
}

export default Section
