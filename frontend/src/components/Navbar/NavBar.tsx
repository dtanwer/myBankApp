import { Box } from '@mui/material'
import icon from '../../img/logo.webp'
import { NavList } from './NavList'

export const NavBar = () => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={10} p={4} pt={3}  pb={3} zIndex={2} boxShadow={" rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
            <Box  >
                <img src={icon} alt="logo" style={{ width: "200px" }} />
            </Box>
            <NavList/>
        </Box>
    )
}
