import React from 'react'
import { Paper } from '@mui/material'
import Section from './Section'

const MyPaper = ({ children }) => {
  return (
    <>
      <Paper
        sx={{
          width: '100%', // Full width
          padding: '16px',
          borderRadius: '10px',
        }}
      >
        { children }
      </Paper>
    </>
  )
}

export default MyPaper