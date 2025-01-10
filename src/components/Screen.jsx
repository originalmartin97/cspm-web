import React from 'react'
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
import ImageSlider from './ImageSlider'
import Actualities from './Actualities'



const Screen = () => {
  return (
    <>
      <Appbar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '76px',
          marginBottom: '6px',
        }}
      >
        <MyPaper>
          <ImageSlider />
            <MyTypography>
            <h6>
              Kollégáimmal együtt feladatunk, hogy segítséget nyújtsunk 
              minden érdeklődőnek és ügyfelünknek az anyagi stabilitásuk 
              és 
              jövőbeni céljaik biztonságos megvalósításához.
            </h6>
            </MyTypography>
          <Section id="szolgaltatasok">
            <MyTypography>
              Aktuális híreink
            </MyTypography>
            <Actualities />
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