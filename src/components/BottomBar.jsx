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
          textAlign: 'center',
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
      </MyTypography>
  )
}

export default BottomBar
