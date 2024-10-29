import React from 'react'
import ContactForm from './ContactForm'
import { Dialog } from '@mui/material'
import Section from './Section'


const Career = ({ open, onClose }) => {
  return (
    <Dialog
        open={open}
        onClose={onClose}
        disableBackdropClick={false}
        disableEscapeKeyDown={false}
    >
        <Section>
            <ContactForm />
        </Section>
    </Dialog>
  )
}

export default Career
