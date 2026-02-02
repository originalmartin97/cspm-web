import React, { useState, useEffect } from 'react'
import { IconButton, AppBar, Toolbar, Typography, Button, Drawer,
  List, ListItem, ListItemText, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import logo from '../../assets/images/logo/favico_transparent_new.png'
import handleButtonClickNavigation from '../../hooks/useScrollNavigation'
import NavButton from '../navigation/NavButton'

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
    { id: 'szolgaltatasok', label: 'Szolgáltatások' },
    { id: 'munkatarsak', label: 'Munkatársak' },
    { id: 'eredmenyek', label: 'Eredmények'},
  ]

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(40, 68, 115, 0.97) 0%, rgba(40, 68, 115, 0.95) 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: elevated 
            ? '0 4px 20px rgba(40, 68, 115, 0.3)' 
            : '0 2px 10px rgba(40, 68, 115, 0.15)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '72px',
            paddingX: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Logo Section */}
          <Button 
            color="inherit" 
            onClick={() => handleButtonClickNavigation('top')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              padding: '8px 12px',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            <img 
              src={logo} 
              alt="CsPM Logo" 
              style={{
                height: '48px',
                width: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
              }} 
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800, // Increased from 700
                color: 'rgb(254, 247, 255)',
                letterSpacing: '0.8px', // Increased from 0.5px
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Stronger shadow
                fontSize: { xs: '1.3rem', sm: '1.6rem' }, // Slightly larger
              }}
            >
              CsPM
            </Typography>
          </Button>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 3,
            }}
          >
            {/* Navigation Items */}
            <Box sx={{ display: 'flex', gap: 2 }}> {/* Increased gap from 1 to 2 */}
              {navItems.map((item) => (
                <NavButton key={item.id} id={item.id} label={item.label} />
              ))}
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, ml: 1 }}> {/* Increased gap from 1.5 to 2 */}
              <Button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdha8G4dTciwQmoiwAsoV2TD720PXWUKZZMg9f2Jr9VEHLcyg/viewform?usp=sf_link', '_blank')}
                sx={{
                  backgroundColor: 'rgba(218, 165, 32, 0.9)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  boxShadow: '0 2px 8px rgba(218, 165, 32, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(218, 165, 32, 1)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(218, 165, 32, 0.4)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Karrier
              </Button>
              <Button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIH3fuCWL_t84PaJnbd46fBHYhapDi5AHp24fczjalitjGSA/viewform?usp=sf_link', '_blank')}
                sx={{
                  backgroundColor: 'rgba(166, 203, 232, 0.9)',
                  color: 'rgba(40, 68, 115, 0.9)',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  border: '1px solid rgba(166, 203, 232, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(166, 203, 232, 1)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(166, 203, 232, 0.4)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Kapcsolat
              </Button>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1.5, ml: 3 }}> {/* Increased gap and margin */}
                            <IconButton
                onClick={() => window.open('https://www.instagram.com/csaladod.penzugyi.mentora/', '_blank')}
                sx={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(45deg, #405893, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #405893, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
                    transform: 'scale(1.15)',
                    boxShadow: '0 8px 25px rgba(225, 48, 108, 0.4)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(225, 48, 108, 0.2)',
                }}
                aria-label="Instagram"
              >
                <InstagramIcon 
                  sx={{ 
                    fontSize: '24px', 
                    color: '#FFFFFF',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
                  }} 
                />
              </IconButton>
              <IconButton
                onClick={() => window.open('https://www.facebook.com/kaszas.gaborne', '_blank')}
                sx={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: '#1877F2', // Facebook brand blue
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: '#166FE5', // Darker Facebook blue
                    transform: 'scale(1.15)',
                    boxShadow: '0 8px 25px rgba(24, 119, 242, 0.4)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(24, 119, 242, 0.2)',
                }}
                aria-label="Facebook"
              >
                <FacebookIcon 
                  sx={{ 
                    fontSize: '24px', 
                    color: '#FFFFFF',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
                  }} 
                />
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'block', md: 'none' },
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320, // Increased from 280
            background: 'linear-gradient(135deg, rgba(40, 68, 115, 0.98) 0%, rgba(40, 68, 115, 0.96) 100%)', // Slightly more opaque
            backdropFilter: 'blur(20px)', // Increased blur
            color: 'white',
            boxShadow: '-8px 0 32px rgba(40, 68, 115, 0.3)', // Add left shadow
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 2,
          }}
        >
          {/* Mobile Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 3,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              mb: 2,
            }}
          >
            <img 
              src={logo} 
              alt="CsPM Logo" 
              style={{
                height: '40px',
                marginRight: '12px',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
              }} 
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'rgb(254, 247, 255)',
                letterSpacing: '0.5px',
              }}
            >
              CsPM
            </Typography>
          </Box>

          {/* Navigation Items */}
          <List sx={{ flexGrow: 1, paddingX: 1 }}>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.id} 
                onClick={() => {
                  handleButtonClickNavigation(item.id);
                  toggleDrawer(false)();
                }}
                sx={{
                  borderRadius: '8px',
                  marginBottom: '4px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: 'rgb(254, 247, 255)',
                      fontWeight: 500,
                      fontSize: '1rem',
                    },
                  }}
                />
              </ListItem>
            ))}

            {/* Action Buttons in Mobile */}
            <Box sx={{ paddingX: 2, mt: 2 }}>
              <Button
                fullWidth
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSdha8G4dTciwQmoiwAsoV2TD720PXWUKZZMg9f2Jr9VEHLcyg/viewform?usp=sf_link', '_blank');
                  toggleDrawer(false)();
                }}
                sx={{
                  backgroundColor: 'rgba(218, 165, 32, 0.9)',
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(218, 165, 32, 1)',
                  },
                }}
              >
                Karrier
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIH3fuCWL_t84PaJnbd46fBHYhapDi5AHp24fczjalitjGSA/viewform?usp=sf_link', '_blank');
                  toggleDrawer(false)();
                }}
                sx={{
                  backgroundColor: 'rgba(166, 203, 232, 0.9)',
                  color: 'rgba(40, 68, 115, 0.9)',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(166, 203, 232, 1)',
                  },
                }}
              >
                Kapcsolat
              </Button>
            </Box>
          </List>

          {/* Social Media in Mobile */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3, // Increased from 2
              padding: 4, // Increased from 3
              borderTop: '1px solid rgba(255, 255, 255, 0.15)', // Slightly more visible
            }}
          >
            <IconButton
              onClick={() => {
                window.open('https://www.instagram.com/csaladod.penzugyi.mentora/', '_blank');
                toggleDrawer(false)();
              }}
              sx={{
                background: 'linear-gradient(45deg, #405893, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #405893, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 8px 25px rgba(225, 48, 108, 0.4)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 15px rgba(225, 48, 108, 0.2)',
              }}
            >
              <InstagramIcon 
                sx={{ 
                  fontSize: '32px', 
                  color: '#FFFFFF',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
                }} 
              />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open('https://www.facebook.com/kaszas.gaborne', '_blank');
                toggleDrawer(false)();
              }}
              sx={{
                backgroundColor: '#1877F2', // Facebook brand blue
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: '#166FE5', // Darker Facebook blue
                  transform: 'scale(1.1)',
                  boxShadow: '0 8px 25px rgba(24, 119, 242, 0.4)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 15px rgba(24, 119, 242, 0.2)',
              }}
            >
              <FacebookIcon 
                sx={{ 
                  fontSize: '32px', 
                  color: '#FFFFFF',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
                }} 
              />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Appbar