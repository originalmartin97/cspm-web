import React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from '@mui/material'
import Appbar from './Appbar'
import MyPaper from './MyPaper'
import Section from './Section'
import MyTypography from './MyTypography'
import BottomBar from './BottomBar'
import ContactForm from './ContactForm'
import Colleagues from './Colleagues'
import MyFab from './MyFab'
import Services from './Services'
import ActualityCardCarousel from './ActualityCardCarousel'
import Achievements from './Achievements'

const Screen = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://csaladodpenzugyimentora.hu/" />
      </Helmet>
      <Appbar />
      <Container
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '76px',
          marginBottom: '6px',
        }}
      >
        <MyPaper>
          <Section id="actualities">
            <MyTypography>
              Aktuális
            </MyTypography>
            <ActualityCardCarousel />
          </Section>
          <Section id="szolgaltatasok">
            <MyTypography>
              Szolgáltatásaink
            </MyTypography>
            <Services />
          </Section>
          <Section id="munkatarsak">
            <MyTypography>
              Munkatársaink
            </MyTypography>
            <Colleagues />
          </Section>
          
          <Section id="eredmenyek">
            <MyTypography>
              Eredményeink
            </MyTypography>
            <Achievements />
          </Section>

          <Section id="kapcsolat">
            <ContactForm label="Kapcsolat" />
          </Section>
        </MyPaper>
      </Container>
      <MyFab />
      <BottomBar />
    </>
  )
}

export default Screen