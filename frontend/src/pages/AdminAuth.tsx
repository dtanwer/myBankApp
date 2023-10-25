import { Box, Button, Input, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { loginAction } from '../features/admin/admin.action'
import { LoadingButton } from '@mui/lab'
import Notification from '../app/Notification'
import { deleteError } from '../features/admin/admin.slice'


export const AdminAuth = () => {
    const showNotification = Notification()
    const { loading, message, type } = useAppSelector(state => state.admin)
    const dispatch = useAppDispatch()
    const [admin, setAdmin] = useState({ username: '', password: '' })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginAction(admin))
    }

    const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (message && type) {
            console.log(message, type)
            showNotification(message, type)
        }
        setTimeout(() => dispatch(deleteError()), 1000)
    }, [loading, message, type])

    return (
        <Box className="adminAuth" component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" mb={4}>Admin Login</Typography>
            <Input autoComplete="username" onChange={handelOnChange} type="text" placeholder='username' name='username' />
            <Input autoComplete='password' onChange={handelOnChange} type="password" placeholder='password' name='password' />
            <LoadingButton variant="outlined" loading={loading} type='submit' sx={{ marginTop: 5 }}>Login</LoadingButton>
        </Box>
    )
}
