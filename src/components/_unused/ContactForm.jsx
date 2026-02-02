import React from 'react'
import MyTypography from './MyTypography'
import MyButton from './MyButton'

const ContactForm = ({ label }) => {
  return (
    <>
        <MyTypography
            sx={{
                textAlign: 'center',
                fontStyle: 'normal',
                fontSize: '2rem',
                fontWeight: 'bold',
            }}
        >
            {label}
        </MyTypography>
        <MyTypography
              sx={{
                textAlign: 'center',
                fontStyle: 'normal',
                fontSize: '1.1rem',
                fontWeight: 'normal',
                marginBottom: '0rem',
              }}
            >
              Vegye fel velünk a kapcsolatot, 
              hogy mielőbb segíthessünk tervei megvalósításában.
        </MyTypography>
        <MyTypography
              sx={{
                textAlign: 'center',
                fontStyle: 'normal',
                fontSize: '0.8rem',
                fontWeight: 'light',
              }}
            >
              *A megadott személyes adatait a törvényi előírásoknak megfelelően és bizalmasan kezeljük.
        </MyTypography>
        <MyButton
            id='kapcsolat'
            color='inherit'
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIH3fuCWL_t84PaJnbd46fBHYhapDi5AHp24fczjalitjGSA/viewform?usp=sf_link', '_blank')}
            sx={{
                display: 'block',
                margin: 'auto',
            }}
        >
              Kapcsolatfelvétel
        </MyButton>
    </>
  )
}

export default ContactForm
