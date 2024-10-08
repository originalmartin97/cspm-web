import React from 'react'
import { Box } from '@mui/material'

const Image = ({ children }) => {
  return (
    <>
      <Box
        component="img"
        src={ children }
      >
      </Box>
    </>
  )
}

export default Image  // Don't forget to export your component!
