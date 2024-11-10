import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MyAccordion = () => {
  return (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
        </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </AccordionDetails>
    </Accordion>
  )
}

export default MyAccordion
