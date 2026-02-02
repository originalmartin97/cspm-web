import React from 'react'
import { Paper as MuiPaper } from '@mui/material'

const Paper = ({ children }) => {
  return (
    <>
      <MuiPaper
        sx={{
          width: 'auto', // Full width
          padding: '16px',
          borderRadius: '10px',
          backgroundColor: 'rgb(254, 247, 255)',
        }}
      >
        { children }
      </MuiPaper>
    </>
  )
}

export default Paper