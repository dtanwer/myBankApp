import { Box, Button } from '@mui/material'
import icon from '../../img/logo.webp'
import { NavList } from './NavList'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setlogOut } from '../../features/admin/admin.slice'

export const NavBar = () => {
    const { admin } = useAppSelector(state => state.admin)
    const dispatch=useAppDispatch()
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={10} p={4} pt={3} pb={3} zIndex={2} boxShadow={" rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
            <Box  >
                <img src={icon} alt="logo" style={{ width: "200px" }} />
            </Box>
            {
                admin && admin.type === 'admin' ?
                    <Button onClick={()=>dispatch(setlogOut())}>Logout</Button> : <NavList />
            }
        </Box>
    )
}
