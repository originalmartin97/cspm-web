import React from 'react'
import { Typography as MuiTypography } from '@mui/material'

const TypographyBody2 = ({
  children,
  sx,
  variant = 'h6',
  component = 'h3',
  ...rest
}) => {
  return (
    <MuiTypography
      variant={variant}
      component={component}
      {...rest}
      sx={{
        fontWeight: 700,
        color: 'rgba(40, 68, 115, 0.94)',
        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
        lineHeight: 1.3,
        letterSpacing: '0.3px',
        textAlign: 'center',
        ...sx,
      }}
    >
      {children}
    </MuiTypography>
  )
}

export default TypographyBody2
