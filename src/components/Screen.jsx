
import React from 'react'
import { Container, Box } from '@mui/material'
import Appbar from './Appbar'
import MyPaper from './MyPaper'
import Section from './Section'
import MyTypography from './MyTypography'
import hook from '../assets/hook.png'
import BottomBar from './BottomBar'
import ContactForm from './ContactForm'

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
          <Section>
            <MyTypography>
            <h1>Üdvözlöm Önt a Családod Pénzügyi Mentora oldalán!</h1>
            <h4>
              Kollégáimmal együtt feladatunk, hogy segítséget nyújtsunk 
              minden érdeklődőnek és ügyfelünknek az anyagi stabilitásuk 
              és 
              jövőbeni céljaik biztonságos megvalósításához.
            </h4>
            </MyTypography>
          </Section>
          <Box
            component="img"
            src={hook}
            sx={{
              width: '100%', // Adjust the width as needed
              height: 'auto', // Maintain aspect ratio
              borderRadius: '10px',
              mt: '16px', // Margin top
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Section id="szolgaltatasok">
            <MyTypography
              sx={{
                textAlign: 'left',
                padding: '16px',
                fontStyle: 'normal',
                fontWeight: 'normal',
              }}
            >
              <h2>Szolgáltatásaink</h2>
              <h4>
                -Baleset és betegség biztosítások magánszemélyeknek és 
                vállalkozásoknak
                <br />
                -Megtakarítások magánszemélyeknek és vállalkozásoknak
                <br />
                -Gyermekbiztosítások
                <br />
                -Nyugdíjbiztosítások
                <br />
                -Személyikölcsönök
                <br />
                -Jelzáloghitelek
                <br />
                -Lakástakarék
                <br />
                -Folyószámlanyitás magánszemélyeknek és vállalkozásoknak
              </h4>
            </MyTypography>
          </Section>
          <Section id="rolunk">
            <MyTypography>
              Rólunk
            </MyTypography>
          </Section>
          <Section id="munkatarsak">
            <MyTypography>
              Munkatársak
            </MyTypography>
          </Section>
          <Section id="kapcsolat">
            <ContactForm />
          </Section>
        </MyPaper>
      </Container>
      <BottomBar />
    </>
  )
}

export default Screen