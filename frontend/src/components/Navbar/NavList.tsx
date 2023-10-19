import { Button, Stack } from '@mui/material'
import React from 'react'

export const NavList = () => {
    const navList = ['Our Branch', 'Loan', 'Invest', 'Protect']
    return (
        <Stack direction={'row'} gap={20}>
            {navList.map(item => <span style={{cursor:"pointer"}}>{item}</span>)}
            <Button variant="contained" color="success" sx={{borderRadius:10,pl:4, pr:4}}>Become a Member</Button>
        </Stack>
    )
}
