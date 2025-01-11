import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import MyTypography from './MyTypography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ReactMarkdown from 'react-markdown'
import onypContent from '../assets/actualities/onyp.md'
import { Box } from '@mui/material'
import ugyfelklubImage from '../assets/actualities/ugyfelklub.png'


const Actualities = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(onypContent)
      .then((response) => response.text())
      .then((text) => setContent(text))
  }, [])

  return (
    <>

      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <MyTypography
            sx={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            Ügyfélklub esemény
          </MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="img"
            src={ugyfelklubImage}
            alt="Ügyfélklub esemény promóciós kép"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => console.error('Image not found:', e.target.src)}
          >
          </Box>
          <br />
          <MyTypography>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0U_T2eMmkziUZjmhvGZSIKLY2OpTBJTiLRMfoy0FGFQM7RQ/viewform?usp=header"
          target='_blank' rel='noreferrer'
          >
          Regisztrációhoz kattintson ide!
          </a>
          </MyTypography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          my: '8px',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <MyTypography
            sx={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            Nyugdíjpénztár felhasználása lakáscélokra
          </MyTypography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactMarkdown>{content}</ReactMarkdown>
        </AccordionDetails>
      </Accordion>

    </>
  )
}

export default Actualities