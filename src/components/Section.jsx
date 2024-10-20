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
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          ...sx,
        }}
      >
        { children }
      </Box>
    </>
  )
}

export default Section
