import React from 'react'
import { Helmet } from 'react-helmet'
import { Container, Grid } from '@mui/material'
import Appbar from './Appbar'
import Section from '../common/Section'
import Typography from '../common/Typography'
import BottomBar from './BottomBar'
import Colleagues from '../features/colleagues/Colleagues'
import ScrollToTopFab from './ScrollToTopFab'
import Services from '../features/services/Services'
import ActualitiesCardCarousel from '../features/actualities/ActualitiesCardCarousel'
import Achievements from '../features/achievements/Achievements'

const Screen = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://csaladodpenzugyimentora.hu/" />
      </Helmet>
      <Appbar />
      <ActualitiesCardCarousel />
      <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ mt: 0 }}>
          {/* Services Section */}
          <Grid item xs={12} md={6} lg={6}>
            <Section id="szolgaltatasok" sx={{ height: '100%' }}>
              <Typography>Szolgáltatások</Typography>
              <Services />
            </Section>
          </Grid>
          
          {/* Achievements Section */}
          <Grid item xs={12} md={6} lg={6}>
            <Section id="eredmenyek" sx={{ height: '100%' }}>
              <Typography>Eredmények</Typography>
              <Achievements />
            </Section>
          </Grid>
          
          {/* Colleagues Section - Always full width */}
          <Grid item xs={12}>
            <Section id="munkatarsak">
              <Typography>Munkatársak</Typography>
              <Colleagues />
            </Section>
          </Grid>
        </Grid>
      </Container>
      <ScrollToTopFab />
      <BottomBar />
    </>
  )
}

export default Screen