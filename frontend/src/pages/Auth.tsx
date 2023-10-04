import {useState} from 'react'
import { SiginUp } from '../components/Auth/SiginUp'
import { Box } from '@mui/material'
import { Login } from '../components/Auth/Login';

export const Auth = () => {
  const [isLogin, setIsLogin] =useState(true);
  return (
    <Box>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", textAlign: "center", transform: "translate(-50%,-50%)" }}>
        {
          isLogin ? <Login setIsLogin={setIsLogin} />:  <SiginUp setIsLogin={setIsLogin}/>
        }
       
      </Box>
    </Box>
  )
}
