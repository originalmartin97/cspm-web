import React from 'react';
import { Button, Typography } from '@mui/material';
import handleButtonClickNavigation from '../functions/handleButtonClickNavigation';

const NavButton = ({id, label}) => {
    return(
        <Button color="inherit" onClick={() => handleButtonClickNavigation(id)}>
            <Typography variant='h7' color='rgb(254, 247, 255)' fontWeight='bold'>
                {label}
            </Typography>
        </Button>
    )
}

export default NavButton