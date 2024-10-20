import React from 'react'
import { Paper } from '@mui/material'
import Section from './Section'

const MyPaper = ({ children }) => {
  return (
    <>
      <Paper
        sx={{
          width: 'auto', // Full width
          padding: '16px',
          borderRadius: '10px',
          backgroundColor: 'rgb(254, 247, 255)',
        }}
      >
        { children }
      </Paper>
    </>
  )
}

export default MyPaper