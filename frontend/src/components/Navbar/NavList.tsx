import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
export const NavList = () => {
    const navList = ['Our Branch', 'Loan', 'Invest', 'Protect']
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: "10px", width: "70vw" }}>
            {navList.map(item => <span style={{ cursor: "pointer" }}>{item}</span>)}
            <Button variant="contained" color="success" endIcon={<EastIcon />}>Become a Member</Button>
        </Box>
    )
}
