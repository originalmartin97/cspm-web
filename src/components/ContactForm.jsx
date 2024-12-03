import React from 'react'
import { TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
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
              }}
            >
              Vegye fel velünk a kapcsolatot, 
              hogy mielőbb segíthessünk tervei megvalósításában.
        </MyTypography>
        <MyTypography
              sx={{
                textAlign: 'center',
                fontStyle: 'normal',
                fontSize: '1.1rem',
                fontWeight: 'normal',
              }}
            >
              *A megadott személyes adatait a törvényi előírásoknak megfelelően és bizalmasan kezeljük.
        </MyTypography>
{/*
        <Grid container spacing={1}>
            <Grid size={6}>
                <TextField
                    label="Név"
                    variant="filled"
                    sx={{
                        width: '100%',
                    }}
                >
                    Név
                </TextField>
            </Grid>
            <Grid size={6}>
                <TextField
                    label="Email"
                    variant="filled"
                    sx={{
                        width: '100%',
                    }}
                >
                    Email
                </TextField>
            </Grid>
            <Grid size={12}>
                <TextField
                    label="Üzenet"
                    maxRows={5}
                    minRows={5}
                    multiline
                    slotProps={{
                        input: { maxLength: 150 }
                    }}
                    sx={{
                        width: '100%',
                     }}
                >
                    Üzenet
                </TextField>
            </Grid>
        </Grid>
*/}
        <MyButton
            id='kapcsolat'
            color='inherit'
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIH3fuCWL_t84PaJnbd46fBHYhapDi5AHp24fczjalitjGSA/viewform?usp=sf_link', '_blank')}
        >
              Kapcsolat
        </MyButton>
    </>
  )
}

export default ContactForm
