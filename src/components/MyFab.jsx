import React, { useState, useEffect, useRef } from 'react'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import handleButtonClickNavigation from '../functions/handleButtonClickNavigation'


// MyFab component definition
const MyFab = () => {
  // State to manage the visibility of the button
  const [visible, setVisible] = useState(false)
  // Reference to the top of the page
  const topRef = useRef(null)

  // Effect to handle the visibility of the button based on scroll position
  useEffect(() => {
    // IntersectionObserver to observe the top of the page
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility to true if the top is not intersecting (i.e., scrolled down)
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    const currentRef = topRef.current
    if (currentRef) {
      // Start observing the top reference
      observer.observe(currentRef)
    }

    // Cleanup function to unobserve the top reference
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
      {/* Invisible div at the top of the page to observe scroll position */}
      <div ref={topRef} style={{ position: 'absolute', top: 0 }} />
      {/* Floating Action Button (FAB) */}
      <Fab
        sx={{
          position: 'fixed',
          bottom: 24, // Increased from 16px for better spacing
          right: 24, // Increased from 16px for better spacing
          zIndex: 1000,
          backgroundColor: 'rgba(40, 68, 115, 0.9)',
          color: 'rgb(254, 247, 255)',
          display: visible ? 'flex' : 'none',
          boxShadow: '0 4px 16px rgba(40, 68, 115, 0.3)',
          border: '1px solid rgba(40, 68, 115, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(40, 68, 115, 1)',
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 6px 20px rgba(40, 68, 115, 0.4)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={() => handleButtonClickNavigation('top')}
        aria-label="Scroll to top"
      >
        <KeyboardArrowUpIcon /> {/* Up arrow icon inside the button */}
      </Fab>
    </>
  )
}

export default MyFab