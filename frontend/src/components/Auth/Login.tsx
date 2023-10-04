import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { loginFormDataType } from '../../@Types/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Loginschema } from '../../utils/formSchma'
type loginPropsType = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}
export const Login = ({ setIsLogin }: loginPropsType) => {
  const { register, handleSubmit, formState: { errors } } = useForm<loginFormDataType>({
    resolver: yupResolver(Loginschema),
  });
  const onLogin = (data: loginFormDataType) => {
    console.log(data);
  };
  return (
    <Box>
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
          <Button type="submit" variant="contained" color="primary">Login</Button>
          <Typography variant="body2">Don't have an account? <Button color="primary" onClick={() => setIsLogin(false)}>Create Account</Button></Typography>
        </Stack>
      </form>
    </Box>
  )
}
