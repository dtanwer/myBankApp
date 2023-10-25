import { Box, Typography } from '@mui/material'
import React from 'react'
type ActionCardProps = {
    icon: string,
    text: string
}
export const ActionCard = ({icon,text}:ActionCardProps) => {
    return (
        <Box className="actionCard">
            <img src={icon} alt="create bank" width={120} height={120} />
            <Typography variant="body1" color="primary">{text}</Typography>
        </Box>
    )
}
