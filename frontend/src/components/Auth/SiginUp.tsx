import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpschema } from '../../utils/formSchma';
import { signUpFormDataType } from '../../@Types/Form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signupAction } from '../../features/auth/auth.action';
import { LoadingButton } from '@mui/lab';
import { useEffect } from 'react';
import Notification from '../../app/Notification';
import { deleteError } from '../../features/auth/auth.slice';

type registerPropsType = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const SiginUp = ({ setIsLogin }: registerPropsType) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<signUpFormDataType>({
        resolver: yupResolver(SignUpschema),
    });
    const showNotification = Notification()
    const { loading, message, type } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const submit = (data: signUpFormDataType) => {
        dispatch(signupAction(data))
    };

    useEffect(() => {
        if (message && type) {
            console.log(message, type)
            showNotification(message, type)
        }
        setTimeout(() => dispatch(deleteError()), 1000)
    }, [loading, message, type])

    return (
        <Box sx={{textAlign:"center"}}>
            <Typography variant="h5" mb={4}>Create Your Account</Typography>
            <form onSubmit={handleSubmit(submit)}>
                <Stack spacing={2} sx={{ width: "300px" }}>
                    <TextField label="Email" variant="outlined" fullWidth size='small' {...register("email")}
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

                    <LoadingButton loading={loading} type="submit" variant="contained" color="primary">Create Account</LoadingButton>

                    <Typography variant="body2">Already have an account? <Button color="primary" onClick={() => setIsLogin(true)}>Login</Button></Typography>
                </Stack>
            </form>

        </Box>
    )
}
