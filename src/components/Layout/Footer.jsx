import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
      <Box sx={{textAlign: 'center', padding: '20px', backgroundColor: '#1A1A19', color: '#fff',p:3}}>

      <Box sx={{ my: 3, display: 'flex', justifyContent: 'center', gap: '20px',
        '& svg': { // Target direct SVG children
          fontSize: '60px',
          cursor: 'pointer',
        },
        '& svg:not(:last-child)': { // Add margin-right to all SVGs except the last one
          mr: 2,
        },
        '& svg:hover': {
          color: 'goldenrod',
          transition: 'all 400ms ease-in-out',
          transform: 'translateX(5px)',
        },
      }}>
        {/* icons */}
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <YouTubeIcon />
      </Box>
        <Typography variant='h5'sx={{'@media (max-width: 600px)': {fontSize: '1rem'}}}>
          All Rights Reserved &copy; 2025 Restaurant Website
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
