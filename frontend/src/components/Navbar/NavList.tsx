import { Box, Button, Modal, Stack } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../Auth/Login';
import { SiginUp } from '../Auth/SiginUp';
import { useAppSelector } from '../../app/hooks';
export const NavList = () => {
    const {user} =useAppSelector(state=>state.auth)
    const navList = ['Our Branch', 'Loan', 'Invest', 'Protect']
    const [model, setModel] = useState(false)
    const [login, setLogin] = useState(false)
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 370,
        bgcolor: 'background.paper',
        boxShadow: 24,
        margin: "auto",
        p: 4,
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: "10px", width: "70vw" }}>
            {navList.map(item => <span style={{ cursor: "pointer" }}>{item}</span>)}
            <Button variant="contained" color="success" endIcon={<EastIcon />} onClick={()=>setModel(true)}>Become a Member</Button>

            <Modal open={model} onClose={() => setModel(false)}>
                <Box sx={style}>
                    {login ? <Login setIsLogin={setLogin} /> : <SiginUp setIsLogin={setLogin} />}
                </Box>
            </Modal>
        </Box>
    )
}
