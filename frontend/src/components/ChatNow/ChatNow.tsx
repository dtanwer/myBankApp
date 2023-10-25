import { Box, Typography } from '@mui/material'
import './Chat.css'

export const ChatNow = () => {
    return (
        <Box className="chatNowButton" >
            <Typography
                variant="body1"
                fontSize={15}
            >
                Chat Now
            </Typography>
        </Box>
    )
}
