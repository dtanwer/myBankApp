import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { loginFormDataType } from '../../@Types/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { Loginschema } from '../../schema/AuthSchema'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loginAction } from '../../features/auth/auth.action'
import { deleteError } from '../../features/auth/auth.slice';
import Notification from '../../app/Notification';
type loginPropsType = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}
export const Login = ({ setIsLogin }: loginPropsType) => {
  const showNotification = Notification()
  const { register, handleSubmit, formState: { errors } } = useForm<loginFormDataType>({
    resolver: yupResolver(Loginschema),
  });
  const { loading, message, type } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const onLogin = (data: loginFormDataType) => {
    dispatch(loginAction(data))
  };

  useEffect(() => {
    if (message && type) {
      console.log(message, type)
      showNotification(message,type)
    }
    setTimeout(() => dispatch(deleteError()), 1000)
  }, [loading, message, type])




  return (
    <Box sx={{textAlign:"center"}}>
      <Typography variant="h5" mb={4}>Login</Typography>
      <form onSubmit={handleSubmit(onLogin)}>
        <Stack spacing={2}>
          <TextField label="Email" variant="outlined" size='small'
            {...register("email")}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />
          <TextField label="Password" variant="outlined" size='small'
            {...register("password")}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
          />
          <LoadingButton type="submit" loading={loading} variant="contained" color="primary"><span>Login</span></LoadingButton>
          <Typography variant="body2">Don't have an account? <Button color="primary" onClick={() => setIsLogin(false)}>Create Account</Button></Typography>
        </Stack>
      </form>
    </Box>
  )
}
