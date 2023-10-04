import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {SignUpschema} from '../../utils/formSchma';
import {registerFormDataType} from '../../@Types/Form';

type registerPropsType = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
  }

export const SiginUp = ({setIsLogin}:registerPropsType) => {
    const { register, handleSubmit,formState: { errors },reset  } = useForm<registerFormDataType>({
        resolver: yupResolver(SignUpschema),
    });

    const submit = (data: registerFormDataType) => {
        console.log("i m working")
        console.log(data);
    };
    return (
        <Box>
            <Typography variant="h5" mb={4}>Create Your Account</Typography>
            <form onSubmit={handleSubmit(submit)}>
                <Stack spacing={2} sx={{ width: "300px" }}>
                    <TextField label="Email" variant="outlined" size='small' {...register("email")}
                        error={errors.email ? true : false}
                        helperText={errors.email?.message}
                     />
                    <TextField label="Name" variant="outlined" size='small' {...register("name")}
                        error={errors.name ? true : false}
                        helperText={errors.name?.message}
                     />
                    <TextField label="Password" variant="outlined" size='small' {...register("password")}
                        error={errors.password ? true : false}
                        helperText={errors.password?.message}
                     />
                    <TextField label="Confirm Password" variant="outlined" size='small'  {...register("passwordConfirm")}
                        error={errors.passwordConfirm ? true : false}
                        helperText={errors.passwordConfirm?.message}
                     />
                    <Button type="submit" variant="contained" color="primary">Create Account</Button>

                    <Typography variant="body2">Already have an account? <Button color="primary" onClick={() => setIsLogin(true)}>Login</Button></Typography>
                </Stack>
            </form>

        </Box>
    )
}
