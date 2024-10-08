import { Container, Box, Typography, Card, Paper, Grid } from '@mui/material'
import React from 'react'
import Appbar from './Appbar'
import hook from '../assets/hook.png'
import placeholder from'../assets/placeholder.png'

const Screen = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 76px)',
        marginTop: '76px',
      }}
    >
      <Appbar />
      <Paper>
      <Box
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          marginBottom: '4px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Udvozlo<br />
          szoveg<br />
          IDE
        </Typography>
      </Box>
      <Box
        component="img"
        src={hook}
        alt="Responsive Image"
        sx={{
          height: 'auto',
          borderRadius: '16px',
          display: 'block',
          mx: 'auto',
          width: { xs: '99%', sm: '94.5%', md: '93.5%', lg: '93%' },
          marginBottom: '4px',
        }}
      />
      <Box
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          marginBottom: '4px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Marketing fogas
        </Typography>
      </Box>
      <Grid
        container
        direction="column"
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '4px',
          width: '93%',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          SZOLGALTATASAINK
        </Typography>
        <Grid size={8}>
          <Card
            sx={{
              padding: '16px',
              margin: '4px',
              backgroundColor: 'rgb(195, 224, 228)',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Penzugyi tanacsadas
            </Typography>
          </Card>
        </Grid>
        <Card
          sx={{
            padding: '16px',
            margin: '4px',
            backgroundColor: 'rgb(195, 224, 228)',
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Csaladi biztositas
          </Typography>
        </Card>
        <Card
          sx={{
            padding: '16px',
            margin: '4px',
            backgroundColor: 'rgb(195, 224, 228)',
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Nyugdijpenztar
          </Typography>
        </Card>
      </Grid>
      <Box
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          marginBottom: '4px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Marketing fogas
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          marginBottom: '4px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textAlign: 'center',
              }}
              >
                Kollegak
              </Typography>
            </Grid>
          <Grid item xs={4}>
            <Card>
              <Typography variant="h5" component="h2">
                Elso szemely
              </Typography>
              <Box
                component="img"
                src={placeholder}
                alt="Responsive Image"
                sx={{
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block',
                  mx: 'auto',
                  width: { xs: '99%', sm: '94.5%', md: '93.5%', lg: '93%' },
                  marginBottom: '4px',
                }}
              />
              <Typography variant="body2" component="p">
                szemely leirasa, mivel foglalkozik, hogy kerul ide, esetleg egyeb informaciok, elerhetosegek
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <Typography variant="h5" component="h2">
                Masodik szemely
              </Typography>
              <Box
                component="img"
                src={placeholder}
                alt="Responsive Image"
                sx={{
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block',
                  mx: 'auto',
                  width: { xs: '99%', sm: '94.5%', md: '93.5%', lg: '93%' },
                  marginBottom: '4px',
                }}
              />
              <Typography variant="body2" component="p">
                szemely leirasa, mivel foglalkozik, hogy kerul ide, esetleg egyeb informaciok, elerhetosegek
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <Typography variant="h5" component="h2">
                Harmadik szemely
              </Typography>
              <Box
                component="img"
                src={placeholder}
                alt="Responsive Image"
                sx={{
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block',
                  mx: 'auto',
                  width: { xs: '99%', sm: '94.5%', md: '93.5%', lg: '93%' },
                  marginBottom: '4px',
                }}
              />
              <Typography variant="body2" component="p">
                szemely leirasa, mivel foglalkozik, hogy kerul ide, esetleg egyeb informaciok, elerhetosegek
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card>
              <Typography variant="h5" component="h2">
                Negyedik szemely
              </Typography>
              <Box
                component="img"
                src={placeholder}
                alt="Responsive Image"
                sx={{
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block',
                  mx: 'auto',
                  width: { xs: '99%', sm: '94.5%', md: '93.5%', lg: '93%' },
                  marginBottom: '4px',
                }}
              />
              <Typography variant="body2" component="p">
                szemely leirasa, mivel foglalkozik, hogy kerul ide, esetleg egyeb informaciok, elerhetosegek
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          marginBottom: '4px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Lepjen kapcsolatba velunk
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgb(254, 247, 255)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          marginBottom: '4px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Marketing fogas
        </Typography>
      </Box>
      </Paper>
      <Box
        sx={{
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 0 16px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          color: 'rgb(254, 247, 255)',
        }}
      >
        <Typography variant='h8'
          sx={{
            padding: '16px'
          }}
        >
          A kockazatokrol es mellekhatasokrol olvassa el a betegtajekoztatojat, vagy kerdezze meg kezeloorvosat vagy gyogyszereszetet. A weboldalon szereplo informaciok nem helyettesitik az orvosi tanacsadasokat. Az oldal hasznalata sajat felelossegere tortenik.
        </Typography>
      </Box>
    </Container>
  )
}

export default Screen