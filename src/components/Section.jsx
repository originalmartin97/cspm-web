import React from 'react'
import { Box } from '@mui/material'

const Section = ({ children, id, sx }) => {
  return (
    <>
      <Box
        id={id}
        sx={{
          padding: '16px',
          borderRadius: '16px',
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
          marginTop: '16px',
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
