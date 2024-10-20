import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import logo from '../assets/logo_tbg.png'
import handleButtonClick from '../functions/handleButtonClick'

const Appbar = () => {
  const [elevated, setElevated] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setElevated(true)
    } else {
      setElevated(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        overflow: 'hidden', // Ensure the corners are properly clipped
        backgroundColor: 'rgb(40, 68, 115)',
        boxShadow: elevated ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow when elevated
        transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for shadow
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Button color="inherit" sx={{marginRight: 'auto', paddingLeft: '25px'}} onClick={() => handleButtonClick('top')}>
          <img src={logo} alt="logo" style={{height: '60px', marginRight: '8px'}} />
          <Typography
          variant='h6'
            sx={{
              fontWeight: 'bold',
              color: 'rgb(254, 247, 255)',
              padding: '0px 10px 0px 0px',
            }}
          >
            CsPM
          </Typography>
      </Button>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '24px', // Increase the spacing between buttons
        }}
      >
        <Button color="inherit" onClick={() => handleButtonClick('szolgaltatasok')}>
            <Typography variant='h7' color='rgb(254, 247, 255)' fontWeight='bold'>
                Szolgáltatásaink
            </Typography>
        </Button>
        <Button color="inherit" onClick={() => handleButtonClick('rolunk')}>
            <Typography variant='h7' color='rgb(254, 247, 255)' fontWeight='bold'>
                Rólunk
            </Typography>
        </Button>
        <Button color="inherit" onClick={() => handleButtonClick('munkatarsak')}>
            <Typography variant='h7' color='rgb(254, 247, 255)' fontWeight='bold'>
                Munkatársak
            </Typography>
        </Button>
        <Button color="inherit" onClick={() => handleButtonClick('kapcsolat')}>
            <Typography variant='h7' color='rgb(254, 247, 255)' fontWeight='bold'>
                Kapcsolat
            </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar