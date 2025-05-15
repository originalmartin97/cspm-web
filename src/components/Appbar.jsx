import React, { useState, useEffect } from 'react'
import { IconButton, AppBar, Toolbar, Typography, Button, Drawer,
  List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/favico_transparent_new.png'
import instagram_logo from '../assets/transparent_instagram_logo.png'
import facebook_logo from '../assets/transparent_facebook_logo.png'
import handleButtonClickNavigation from '../functions/handleButtonClickNavigation'
import NavButton from './NavButton'

const Appbar = () => {
  const [elevated, setElevated] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setElevated(true)
    } else {
      setElevated(false)
    }
  }

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { id: 'actualities', label: 'Aktuális' },
    { id: 'szolgaltatasok', label: 'Szolgáltatásaink' },
    { id: 'munkatarsak', label: 'Munkatársaink' },
    { id: 'kapcsolat', label: 'Kapcsolat' },
  ]

  return (
      <>
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
        <Button color="inherit" sx={{marginRight: 'auto'}} onClick={() => handleButtonClickNavigation('top')}>
            <img src={logo} alt="logo" style={{height: '60px', marginRight: '8px'}} />
            <Typography
            variant='h6'
              sx={{
                fontWeight: 'bold',
                color: 'rgb(254, 247, 255)',
              }}
            >
              CsPM
            </Typography>
        </Button>

        <Button color="inherit" sx={{marginRight: 'auto'}} onClick={() => window.open('https://www.instagram.com/csaladod.penzugyi.mentora/', '_blank')}>
            <img src={instagram_logo} alt="logo" style={{height: '40px'}} />
        </Button>

        <Button color="inherit" sx={{marginRight: 'auto'}} onClick={() => window.open('https://www.facebook.com/kaszas.gaborne', '_blank')}>
            <img src={facebook_logo} alt="logo" style={{height: '40px'}} />
        </Button>

        <Toolbar
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            gap: '24px', // Increase the spacing between buttons
          }}
        >
          {navItems.map((item) => (
            <NavButton key={item.id} id={item.id} label={item.label} />
          ))}
          <Button
            id='karrier'
            color='inherit'
            sx={{
              backgroundColor: 'rgb(195, 224, 228, 0.7)',
              borderRadius: '12px',
            }}
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdha8G4dTciwQmoiwAsoV2TD720PXWUKZZMg9f2Jr9VEHLcyg/viewform?usp=sf_link', '_blank')}
          >
            <Typography variant='h7' color='rgb(254, 247, 255)' fontWeight='bold'>
              Karrier
            </Typography>
          </Button>
        </Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='end'
          onClick={toggleDrawer(true)}
          sx={{
            display: {xs: 'block', md: 'none'},
            marginRight: '12px',
        }}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          backgroundColor: 'rgb(40, 68, 115, 0.25)',
        }}
        >
        <List
          sx={{
            backgroundColor: 'rgb(254, 247, 255)',
            height: '100%',
          }}
        >
          {navItems.map((item) => (
            <ListItem button key={item.id} onClick={() => {handleButtonClickNavigation(item.id); toggleDrawer(false)()}}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem button key='karrier' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdha8G4dTciwQmoiwAsoV2TD720PXWUKZZMg9f2Jr9VEHLcyg/viewform?usp=sf_link', '_blank')}>
            <ListItemText primary='Karrier' />
          </ListItem>
        </List>
      </Drawer>
      {/*
      <Career open={careerOpen} onClose={handleClose} />
      */}
    </>
  )
}

export default Appbar