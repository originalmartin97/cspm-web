import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import MyButton from './MyButton'
import colleaguesData from '../assets/colleaguesData'

const Colleagues = () => {
  const [expandedId, setExpandedId] = useState(null)

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <Grid container spacing={6}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '16px',
        }}
    >
      {colleaguesData
      .sort((a,b) => a.id - b.id) // Sort colleagues by id
      .map((colleague) => (
        <Card
          key={colleague.id}
          sx={{
            maxWidth: expandedId === colleague.id ? 600 : 345, // Adjust maxWidth based on expanded state
            width: '100%', // Ensure the card takes up the full width of its container
            transition: 'max-width 0.3s ease-in-out', // Smooth transition for expansion and contraction
            borderRadius: '16px',
          }}
        >
          <CardMedia
            sx={{ height: "auto" }}
            component="img"
            src={colleague.image}
          />
          <CardContent
            sx={{ 
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              {colleague.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{
                __html: expandedId === colleague.id
                  ? colleague.longDescription.replace(/\n/g, '<br />')
                  : colleague.shortDescription.replace(/\n/g, '<br />')
              }}
            />
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <MyButton onClick={() => handleExpandClick(colleague.id)}>
                {expandedId === colleague.id ? 'Kevesebb' : 'Több'}
              </MyButton>
            </CardContent>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}

export default Colleagues