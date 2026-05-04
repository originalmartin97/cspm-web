import React, { useState, useEffect, useCallback } from 'react'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import TypographyBody2 from '../../common/TypographyBody2'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import achievementsData from '../../../data/achievements'
import { useSwipeable } from 'react-swipeable'

const sorted = [...achievementsData].sort((a, b) => a.id - b.id)

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const navigate = useCallback((direction) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => {
      if (direction === 'next') return (prev + 1) % sorted.length
      return prev === 0 ? sorted.length - 1 : prev - 1
    })
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  useEffect(() => {
    if (isHovering) return
    const id = setInterval(() => navigate('next'), 5000)
    return () => clearInterval(id)
  }, [isHovering, navigate])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigate('next'),
    onSwipedRight: () => navigate('prev'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <Box
      sx={{ position: 'relative', mt: 2 }}
      role="region"
      aria-label="Eredmények carousel"
    >
      {/* Slide viewport */}
      <Box
        {...swipeHandlers}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          width: '100%',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(40, 68, 115, 0.15)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: `${sorted.length * 100}%`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(-${(currentIndex * 100) / sorted.length}%)`,
          }}
        >
          {sorted.map((achievement, index) => (
            <Box
              key={achievement.id}
              sx={{ width: `${100 / sorted.length}%`, flexShrink: 0 }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${achievement.name} – ${index + 1} / ${sorted.length}`}
              aria-hidden={currentIndex !== index}
            >
              <Card
                sx={{
                  borderRadius: 0,
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  image={achievement.image}
                  alt={achievement.name}
                  sx={{
                    height: { xs: 260, sm: 320, md: 380 },
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
                  <TypographyBody2>{achievement.name}</TypographyBody2>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(40, 68, 115, 0.78)', textAlign: 'center' }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
          gap: 2,
        }}
      >
        <IconButton
          onClick={() => navigate('prev')}
          disabled={isTransitioning}
          aria-label="Előző eredmény"
          sx={{
            backgroundColor: 'rgba(40, 68, 115, 0.1)',
            color: 'rgba(40, 68, 115, 0.8)',
            border: '2px solid rgba(40, 68, 115, 0.2)',
            width: 48,
            height: 48,
            '&:hover': {
              backgroundColor: 'rgba(40, 68, 115, 0.15)',
              color: 'rgba(40, 68, 115, 1)',
              border: '2px solid rgba(40, 68, 115, 0.4)',
              transform: 'scale(1.05)',
            },
            '&:disabled': { opacity: 0.5 },
            transition: 'all 0.2s ease',
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* Pagination dots */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
            backgroundColor: 'rgba(40, 68, 115, 0.05)',
            borderRadius: '24px',
            padding: '12px 20px',
            border: '1px solid rgba(40, 68, 115, 0.1)',
          }}
          role="tablist"
          aria-label="Carousel pagination"
        >
          {sorted.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                if (index === currentIndex || isTransitioning) return
                setIsTransitioning(true)
                setCurrentIndex(index)
                setTimeout(() => setIsTransitioning(false), 600)
              }}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={`Ugrás ${index + 1}. diára`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (index === currentIndex || isTransitioning) return
                  setIsTransitioning(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsTransitioning(false), 600)
                }
              }}
              sx={{
                width: currentIndex === index ? 24 : 12,
                height: 12,
                borderRadius: '6px',
                backgroundColor: currentIndex === index
                  ? 'rgba(40, 68, 115, 0.8)'
                  : 'rgba(40, 68, 115, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: currentIndex === index
                    ? 'rgba(40, 68, 115, 1)'
                    : 'rgba(40, 68, 115, 0.6)',
                  transform: 'scale(1.1)',
                },
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={() => navigate('next')}
          disabled={isTransitioning}
          aria-label="Következő eredmény"
          sx={{
            backgroundColor: 'rgba(40, 68, 115, 0.1)',
            color: 'rgba(40, 68, 115, 0.8)',
            border: '2px solid rgba(40, 68, 115, 0.2)',
            width: 48,
            height: 48,
            '&:hover': {
              backgroundColor: 'rgba(40, 68, 115, 0.15)',
              color: 'rgba(40, 68, 115, 1)',
              border: '2px solid rgba(40, 68, 115, 0.4)',
              transform: 'scale(1.05)',
            },
            '&:disabled': { opacity: 0.5 },
            transition: 'all 0.2s ease',
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Achievements
