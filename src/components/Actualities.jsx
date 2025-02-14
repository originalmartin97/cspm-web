import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import MyTypography from './MyTypography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ReactMarkdown from 'react-markdown'

// Import your markdown files
import onypContent from '../assets/actualities/onyp.md'
import szkolcsonContent from '../assets/actualities/szemelyi_kolcson.md'
import penzugyKarrierLehetosegContent from '../assets/actualities/penzugy_karrier_hirdetes.md'
import allampapirokContent from '../assets/actualities/allampapirok.md'

const contents = [
  { title: 'Állampapírok vagy Befektetés + Biztosítás', path: allampapirokContent },
  { title: 'Nyugdíjpénztár felhasználása lakáscélokra', path: onypContent },
  { title: 'Személyi kölcsön', path: szkolcsonContent },
  { title: 'Karrier lehetőség', path: penzugyKarrierLehetosegContent },
]

const Actualities = () => {
  const [content, setContent] = useState({})

  useEffect(() => {
    contents.forEach((item) => {
      fetch(item.path)
        .then((response) => response.text())
        .then((text) => {
          setContent((prevContent) => ({
            ...prevContent,
            [item.title]: text,
          }))
        })
    })
  }, [])

  return (
    <>
      {contents.map((item) => (
        <Accordion
          key={item.title}
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
              {item.title}
            </MyTypography>
          </AccordionSummary>
          <AccordionDetails>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer">
                    {props.children}
                  </a>
                ),
              }}
            >
              {content[item.title]}
            </ReactMarkdown>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default Actualities