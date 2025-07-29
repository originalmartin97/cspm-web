import React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from '@mui/material'
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
      <Container
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '16px',
          marginBottom: '6px',
        }}
      >
        <Section id="szolgaltatasok"
        sx={{
          marginTop: 0,
        }}
      >
        <MyTypography>
          Szolgáltatások
        </MyTypography>
        <Services />
      </Section>
        <Section id="munkatarsak">
          <MyTypography>
            Munkatársak
          </MyTypography>
          <Colleagues />
        </Section>
        
        <Section id="eredmenyek">
          <MyTypography>
            Eredmények
          </MyTypography>
          <Achievements />
        </Section>
      </Container>
      <MyFab />
      <BottomBar />
    </>
  )
}

export default Screen