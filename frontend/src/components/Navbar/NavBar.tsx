import { Box, Stack, Typography } from '@mui/material'
import icon from '../../img/logo.webp'
import React from 'react'
import { NavList } from './NavList'

export const NavBar = () => {
    return (
        <Box display={'flex'} gap={40} p={4} >
            <Stack  >
                <img src={icon} alt="logo" style={{ width: "200px" }} />
            </Stack>
            <NavList/>


        </Box>
    )
}
