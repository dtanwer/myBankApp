import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { modelStyle } from '../../utils/modelStyle'
import { LoadingButton } from '@mui/lab'

export const AddBank = () => {
    return (
        <Box component="form" sx={modelStyle}>

            <Stack spacing={2} sx={{ width: "300px" }}>
                <TextField label="Email" variant="outlined" fullWidth size='small' 
                // {...register("email")}
                    // error={errors.email ? true : false}
                    // helperText={errors.email?.message}
                />
                <TextField label="Name" variant="outlined" size='small' 
                // {...register("name")}
                //     error={errors.name ? true : false}
                //     helperText={errors.name?.message}
                />
                <TextField label="Password" variant="outlined" size='small' 
                // {...register("password")}
                //     error={errors.password ? true : false}
                //     helperText={errors.password?.message}
                />
                

                <LoadingButton  type="submit" variant="contained" color="primary">Create Account</LoadingButton>

                <Typography variant="body2">Already have an account? <Button color="primary" >Login</Button></Typography>
            </Stack>

        </Box>
    )
}
