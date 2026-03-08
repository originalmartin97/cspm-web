import React from 'react'
import { Helmet } from 'react-helmet'
import { Container, Grid } from '@mui/material'
import Appbar from './Appbar'
import Section from './Section'
import MyTypography from './MyTypography'
import BottomBar from './BottomBar'
import Colleagues from './Colleagues'
import MyFab from './MyFab'
import Services from './Services'
import ActualitiesCardCarousel from './ActualitiesCardCarousel'
import Achievements from './Achievements'

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
              <MyTypography>Szolgáltatások</MyTypography>
              <Services />
            </Section>
          </Grid>
          
          {/* Achievements Section */}
          <Grid item xs={12} md={6} lg={6}>
            <Section id="eredmenyek" sx={{ height: '100%' }}>
              <MyTypography>Eredmények</MyTypography>
              <Achievements />
            </Section>
          </Grid>
          
          {/* Colleagues Section - Always full width */}
          <Grid item xs={12}>
            <Section id="munkatarsak">
              <MyTypography>Munkatársak</MyTypography>
              <Colleagues />
            </Section>
          </Grid>
        </Grid>
      </Container>
      <MyFab />
      <BottomBar />
    </>
  )
}

export default Screen