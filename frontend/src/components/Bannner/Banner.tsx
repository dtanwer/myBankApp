import { Box, Button, Modal, Typography } from '@mui/material'
import './banner.css'
import { HomeLogin } from './HomeLogin'
import { AtmFinder } from './AtmFinder'
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import { Login } from '../Auth/Login';

export const Banner = () => {
    
    return (
        <Box className="banner" >
            <img src="https://www.alliantcreditunion.org/images/uploads/images/home-hero-certs-hammock_042123.jpg" alt="banner" style={{ width: "100%" }} />
            <Box className="lightCircle"></Box>
            <Box className="content">
                <Typography variant='h6'>
                    Sit back, relax and earn a higher rate
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{fontSize:"2rem",lineHeight:"1"}}>
                    Lock in 5.30% APY57 with a 12-month jumbo certificate
                </Typography>

                <Button variant="contained" color="success" endIcon={<EastIcon />}>Learn More</Button>

            </Box>

            <Box className="homelogin">
                <HomeLogin />
                <AtmFinder />
            </Box>

           

        </Box>
    )
}
