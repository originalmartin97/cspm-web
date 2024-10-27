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
    <Grid container spacing={3}>
      {colleaguesData.map((colleague) => (
        <Card
          key={colleague.id}
          sx={{
            maxWidth: expandedId === colleague.id ? 600 : 345, // Adjust maxWidth based on expanded state
            width: '100%', // Ensure the card takes up the full width of its container
            transition: 'max-width 0.3s ease-in-out', // Smooth transition for expansion and contraction
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
            >
              {expandedId === colleague.id ? colleague.longDescription : colleague.shortDescription}
            </Typography>
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