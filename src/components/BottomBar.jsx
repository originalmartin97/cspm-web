import React from 'react'
import MyTypography from './MyTypography'

const BottomBar = () => {
  return (
      <MyTypography
        sx={{
          fontSize: '12px',
          backgroundColor: 'rgb(0, 0, 0, 0.88)',
          alignItems: 'center',
          color: 'white',
        }}
      >
        A kockazatokrol es mellekhatasokrol olvassa el a betegtajekoztatojat, vagy kerdezze meg kezeloorvosat vagy gyogyszereszetet.
        A weboldalon szereplo informaciok nem helyettesitik az orvosi tanacsadasokat. Az oldal hasznalata sajat felelossegere tortenik.
      </MyTypography>
  )
}

export default BottomBar
