import { Login } from '../Auth/Login'
import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { SiginUp } from '../Auth/SiginUp'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setSignInModal as setModal } from '../../features/auth/auth.slice';
export const HomeLogin = () => {
  const dispatch = useAppDispatch()
  const {modalSignIn:modal} =useAppSelector(state=>state.auth)
  const [login, setLogin] = useState(true)
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
    <Box className="homeloginBox">
      <Typography variant="h6" sx={{ pt: 2, pb: 2, mb: 2, borderBottom: "1px solid #d6d8d9" }}>Online Banking</Typography>
      <Button variant="contained" onClick={() =>dispatch( setModal(true))} sx={{ width: "90%", mb: 1 }}>Secure Log In</Button>
      <Typography variant="caption" display="block" gutterBottom sx={{ cursor: "pointer" }}>
        Forgot username/password?
      </Typography>
      <Box className="footer">
        <Typography variant="caption" display="block" gutterBottom sx={{ textDecoration: "underline", cursor: "pointer" }}>
          Setup in 1 Minute
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{ textDecoration: "underline", cursor: "pointer" }}>
          Security Center
        </Typography>
      </Box>
      <Modal open={modal}   onClose={() => dispatch(setModal(false))}>
        <Box sx={style}>
        {login? <Login setIsLogin={setLogin} /> : <SiginUp setIsLogin={setLogin} />}
        </Box>
      </Modal>
    </Box>
  )
}
