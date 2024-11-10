import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import servicesData from '../assets/servicesData'

const MyAccordion = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
                {service.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
            sx={{ textAlign: 'justify' }}
                dangerouslySetInnerHTML={{
                    __html: service.description.replace(/\n/g, '<br />')
                }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default MyAccordion