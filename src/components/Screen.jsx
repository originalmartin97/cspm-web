import { Container, Box} from '@mui/material'
import React from 'react'
import Appbar from './Appbar'
import MyPaper from './MyPaper'
import Section from './Section'
import MyTypography from './MyTypography'
import hook from '../assets/hook.png'
import BottomBar from './BottomBar'

const Screen = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '76px',
          marginBottom: '6px',
        }}
      >
        <Appbar />
        <MyPaper>
          <Section>
            <MyTypography>
              Udvozlo szoveg
            </MyTypography>
          </Section>
            <Box
              component="img"
              src = { hook }
              sx={{
                width: '100%', // Adjust the width as needed
                height: 'auto', // Maintain aspect ratio
                borderRadius: '10px',
                mt: '16px', // Margin top
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          <Section>
            <MyTypography>
              Marketing fogas
            </MyTypography>
          </Section>
          <Section>
            <MyTypography>
              Szolgaltatasaink
            </MyTypography>
          </Section>
          <Section>
            <MyTypography>
              Marketing fogas2
            </MyTypography>
          </Section>
          <Section>
            <MyTypography>
              Lepjen kapcsolatba velunk
            </MyTypography>
          </Section>
          <Section>
            <MyTypography>
              Marketing fogas3
            </MyTypography>
          </Section>
        </MyPaper>
      </Container>
      <BottomBar />
    </>
  )
}

export default Screen