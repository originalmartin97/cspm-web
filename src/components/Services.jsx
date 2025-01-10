import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import MyTypography from './MyTypography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import servicesData from '../assets/servicesData'
import { Typography } from '@mui/material'

const Services = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <Accordion key={index}
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
                textAlign: 'center'
              }}
            >
                {service.title}
            </MyTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
            sx={{ textAlign: 'justify' }}
                dangerouslySetInnerHTML={{
                  __html: (service.description || '').replace(/\n/g, '<br />')
                }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default Services