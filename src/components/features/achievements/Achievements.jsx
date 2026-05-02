import React, { useRef } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import achievementsData from '../../../data/achievements'

const Achievements = () => {
  const carouselRef = useRef(null)

  const scrollCarousel = (direction) => {
    const container = carouselRef.current
    if (!container) return

    const scrollAmount = Math.round(container.clientWidth * 0.82)
    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 2,
      }}
      role="region"
      aria-label="Eredmények carousel"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => scrollCarousel('prev')}
            aria-label="Eredmények előző kártya"
            sx={{
              backgroundColor: 'rgba(40, 68, 115, 0.06)',
              border: '1px solid rgba(40, 68, 115, 0.12)',
              '&:hover': { backgroundColor: 'rgba(40, 68, 115, 0.1)' },
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => scrollCarousel('next')}
            aria-label="Eredmények következő kártya"
            sx={{
              backgroundColor: 'rgba(40, 68, 115, 0.06)',
              border: '1px solid rgba(40, 68, 115, 0.12)',
              '&:hover': { backgroundColor: 'rgba(40, 68, 115, 0.1)' },
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          gap: 2.5,
          overflowX: 'auto',
          overflowY: 'visible',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          pb: 1.5,
          px: { xs: 0.5, sm: 0.75 },
          mx: { xs: -0.5, sm: -0.75 },
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': {
            height: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(40, 68, 115, 0.18)',
            borderRadius: 999,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(40, 68, 115, 0.06)',
            borderRadius: 999,
          },
        }}
      >
        {achievementsData
          .sort((a, b) => a.id - b.id)
          .map((achievement) => (
            <Card
              key={achievement.id}
              sx={{
                //flex: '0 0 min(88vw, 520px)',
                scrollSnapAlign: 'start',
                borderRadius: '24px',
                overflow: 'hidden',
                // border: '1px solid rgba(40, 68, 115, 0.08)',
                boxShadow: '0px 4px 8px rgba(40, 68, 115, 0.12)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,249,252,0.98))',
              }}
            >
              <CardActionArea sx={{ height: '100%', alignItems: 'stretch', cursor: 'default' }}>
                <CardMedia
                  component="img"
                  image={achievement.image}
                  alt={achievement.name}
                  sx={{
                    height: { xs: 240, sm: 280, md: 320 },
                    objectFit: 'cover',
                  }}
                />

                <CardContent
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.2,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: 'rgba(40, 68, 115, 0.96)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                    }}
                  >
                    {achievement.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(40, 68, 115, 0.78)',
                      lineHeight: 1.7,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </Box>
  )
}

export default Achievements