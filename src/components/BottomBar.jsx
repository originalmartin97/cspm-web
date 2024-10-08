import React from 'react'
import { Box } from '@mui/material'
import MyTypography from './MyTypography'
import Section from './Section'

const BottomBar = () => {
  return (
    <Section
      sx={{
        backgroundColor: 'rgb(0, 0, 0, 0.88)',
        justifyContent: 'center',
        color: 'rgb(254, 247, 255)',
        width: '100vw',
      }}
    >
      <MyTypography
        sx={{
          fontSize: '12px',
        }}
      >
        A kockazatokrol es mellekhatasokrol olvassa el a betegtajekoztatojat, vagy kerdezze meg kezeloorvosat vagy gyogyszereszetet. A weboldalon szereplo informaciok nem helyettesitik az orvosi tanacsadasokat. Az oldal hasznalata sajat felelossegere tortenik.
      </MyTypography>
    </Section>
  )
}

export default BottomBar
