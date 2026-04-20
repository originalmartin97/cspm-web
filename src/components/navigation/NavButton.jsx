import React from 'react';
import { Button, Typography } from '@mui/material';
import handleButtonClickNavigation from '../../hooks/useScrollNavigation';

const NavButton = ({id, label}) => {
    return(
        <Button 
            color="inherit" 
            onClick={() => handleButtonClickNavigation(id)}
            sx={{
                padding: '8px 16px',
                borderRadius: '8px',
                minWidth: 'auto',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-1px)',
                },
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: '2px',
                    backgroundColor: 'rgba(166, 203, 232, 0.8)',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                },
                '&:hover:before': {
                    width: '80%',
                },
                transition: 'all 0.2s ease',
            }}
        >
            <Typography 
                sx={{
                    color: 'rgb(254, 247, 255)',
                    fontWeight: 700, // Increased from 600
                    fontSize: '1rem', // Increased from 0.95rem
                    textTransform: 'none',
                    letterSpacing: '0.4px', // Increased from 0.3px
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)', // Stronger shadow
                }}
            >
                {label}
            </Typography>
        </Button>
    )
}

export default NavButton