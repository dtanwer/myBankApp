import { Box, Typography } from '@mui/material'
type CarouselItemProps = {
    title: string
    description: string
    icon: string
}
export const CarouselItem = ({ title, icon, description }: CarouselItemProps) => {
    return (
        <Box sx={{ width: 500, height: 300, textAlign: "center", p:2,pt:5}}>
            <img src={icon} alt="icon" width={90} height={90} />
            <Typography variant="body1" color="primary" >{title}</Typography>
            <Typography variant="body2" width={300} m={"auto"}>{description}</Typography>
        </Box>
    )
}
