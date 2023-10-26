import { Avatar, Box, Button, IconButton, Menu, MenuItem, Modal, Stack } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import { Login } from '../Auth/Login';
import { SiginUp } from '../Auth/SiginUp';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSignUpModal as setModal, setlogOut } from '../../features/auth/auth.slice';
import { deepOrange } from '@mui/material/colors';
import { SelectBranch } from './SelectBranch';
import { modelStyle } from '../../utils/modelStyle';
export const NavList = () => {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        dispatch(setlogOut())
        handleClose()
    }
    const { user, modalSignUp: modal } = useAppSelector(state => state.auth)
    const navList = ['Our Branch', 'Loan', 'Invest', 'Protect']
    const [login, setLogin] = useState(false)
    
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: "10px", width: "70vw" }}>
            {navList.map(item => <span style={{ cursor: "pointer" }}>{item}</span>)}
            {user ?
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 40, height: 40, bgcolor: deepOrange[500] }}>{user.name[0].toUpperCase()}</Avatar>
                </IconButton>

                :<>
                <Button variant="contained" color="success" endIcon={<EastIcon />} onClick={() => dispatch(setModal(true))}>Become a Member</Button>
                <SelectBranch/>
                </>
                }
            <Modal open={modal} onClose={() => dispatch(setModal(false))}>
                <Box sx={modelStyle}>
                    {login ? <Login setIsLogin={setLogin} /> : <SiginUp setIsLogin={setLogin} />}
                </Box>
            </Modal>
            <Menu
                id="demo-positioned-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={logout}>LogOut</MenuItem>
            </Menu>
        </Box>
    )
}
