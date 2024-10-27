import React, { useState, useEffect, useRef } from 'react'
import Fab from '@mui/material/Fab'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import handleButtonClick from '../functions/handleButtonClick'


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
          position: 'fixed', // Fixed position on the screen
          bottom: 16, // 16px from the bottom
          right: 16, // 16px from the right
          zIndex: 1000, // High z-index to appear above other elements
          backgroundColor: 'rgb(40, 68, 115)', // Custom background color
          color: 'rgb(254, 247, 255)', // Custom text/icon color
          display: visible ? 'flex' : 'none', // Show or hide based on visibility state
        }}
        onClick={() => handleButtonClick('top')} // Handle button click to scroll to top
      >
        <ArrowDropUpIcon /> {/* Up arrow icon inside the button */}
      </Fab>
    </>
  )
}

export default MyFab