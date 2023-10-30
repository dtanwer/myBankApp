import { Box, Stack, TextField, Typography } from '@mui/material'
import { modelStyle } from '../../utils/modelStyle'
import { LoadingButton } from '@mui/lab'
import { Bankschema } from '../../schema/BankSchma';
import { BankFormDataType } from '../../@Types/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createBankAction } from '../../features/bank/bank.action';
import { MuiInput } from '../input/MuiInput';



export const AddBank = () => {
    const { address } = useAppSelector(state => state.address)
    const { loading } = useAppSelector(state => state.bank)
    const dispatch = useAppDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<BankFormDataType>({
        resolver: yupResolver(Bankschema),
    });
    const onSubmit = (data: BankFormDataType) => {
        console.log(address)
        dispatch(createBankAction({ ...data, address: address?._id }))
    }
    return (
        <Box component="form" sx={modelStyle} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} sx={{ width: "300px" }}>
                <Typography variant="h6">Bank Details</Typography>
                <MuiInput name="bankName" register={register} errors={errors}/>
                <MuiInput name="branchName" register={register} errors={errors}/>
                <MuiInput name="ifscCode" register={register} errors={errors}/>
                <LoadingButton type="submit" loading={loading} variant="contained" color="primary">Create Bank</LoadingButton>
            </Stack>
        </Box>
    )
}
