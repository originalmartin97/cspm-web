import React from 'react'
import { Box, Typography } from '@mui/material'

const BottomBar = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(40, 68, 115, 0.95)',
        color: 'rgb(254, 247, 255)',
        padding: { xs: 3, sm: 4, md: 5 },
        textAlign: 'center',
        borderTop: '1px solid rgba(166, 203, 232, 0.2)',
        marginTop: 'auto',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '0.8rem', sm: '0.85rem' },
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto',
          opacity: 0.9,
          '& br': {
            display: { xs: 'none', sm: 'block' },
          },
        }}
      >
        A weboldalon található információk tájékoztató jellegűek és nem minősülnek szakmai tanácsadásnak.
        A weboldal üzemeltetője nem vállal felelősséget az információk pontosságáért, teljességéért vagy aktualitásáért.
        A weboldal használatával Ön elfogadja a jelen jogi nyilatkozatot.<br/>
        <br/>
        A weboldalon található tartalom, beleértve a szövegeket, képeket, videókat és egyéb anyagokat, szerzői jogi védelem alatt
        állnak. Az engedély nélküli másolás, terjesztés vagy egyéb felhasználás tilos.<br/>
        <br/>
        A weboldalon található linkek más weboldalakra mutathatnak, amelyekért a weboldal üzemeltetője nem vállal felelősséget.
        A linkek követésével Ön elhagyja a weboldalt, és egy harmadik fél weboldalára kerül.<br/>
        <br/>
        A jelen jogi nyilatkozat bármikor módosítható. Kérjük, rendszeresen látogassa meg ezt az oldalt, hogy tájékozódjon a
        legfrissebb változásokról.
      </Typography>
      
      <Box
        sx={{
          mt: 3,
          pt: 2,
          borderTop: '1px solid rgba(166, 203, 232, 0.2)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.75rem',
            opacity: 0.7,
          }}
        >
          © 2024 CsPM - Családod Pénzügyi Mentora. Minden jog fenntartva.
        </Typography>
      </Box>
    </Box>
  )
}

export default BottomBar
