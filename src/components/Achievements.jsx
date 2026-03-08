import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import MyButton from './MyButton'
import achievementsData from '../assets/achievementsData'

const Achievements = () => {
  return (
    <Grid container spacing={6}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '16px',
        }}
    >
      {achievementsData
      .sort((a,b) => a.id - b.id) // Sort by id
      .map((achievement) => (
        <Card
          key={achievement.id}
          sx={{
            maxWidth: 600, // Adjust maxWidth based on expanded state
            width: '100%', // Ensure the card takes up the full width of its container
            transition: 'max-width 0.3s ease-in-out', // Smooth transition for expansion and contraction
            borderRadius: '16px',
          }}
        >
          <CardMedia
            sx={{ height: "auto" }}
            component="img"
            src={achievement.image}
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
              {achievement.name}
            </Typography>
            <CardContent>
              <Typography
              variant="body2"
              >
                {achievement.description}
            </Typography>
            </CardContent>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}

export default Achievements