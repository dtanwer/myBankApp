import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { modelStyle } from '../../utils/modelStyle'
import { LoadingButton } from '@mui/lab'
import { Help } from '@mui/icons-material'

export const AddBank = () => {
    return (
        <Box component="form" sx={modelStyle}>

            <Stack spacing={2} sx={{ width: "300px" }}>
                <Typography variant="h6">Add Bank</Typography>
                <TextField fullWidth size='small' label="Bank Name" variant="outlined" />
                <TextField fullWidth size='small' label="Bank Branch" variant="outlined" />
                <TextField fullWidth size='small' label="IFSC Code" variant="outlined" />
                <Typography variant="body2" color="text.secondary" fontSize={15} m={0}>Address is Required</Typography>
                <Button variant="outlined" color="primary">Add Address</Button>
                <LoadingButton  type="submit" variant="contained" color="primary">Create Bank</LoadingButton>
            </Stack>

        </Box>
    )
}
