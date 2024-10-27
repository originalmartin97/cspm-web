import React from 'react'
import { Button } from '@mui/material'

const MyButton = ({children, sx, onClick}) => {
  return (
    <Button
        sx={{
            backgroundColor: 'rgb(40, 68, 115)',
            color: 'rgb(254, 247, 255)',
            borderRadius: '10px',
            padding: '10px 20px',
            ...sx,
        }}
        onClick={onClick}
    >
      { children }
    </Button>
  )
}

export default MyButton
