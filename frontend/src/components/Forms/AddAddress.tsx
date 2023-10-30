import { Box, Stack, TextField, Typography } from "@mui/material"
import { modelStyle } from "../../utils/modelStyle"
import { addressSchema } from "../../schema/BankSchma"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { AddressFormDataType } from "../../@Types/Form"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { createAddressAction } from "../../features/address/address.action"
import { LoadingButton } from "@mui/lab"
import { MuiInput } from "../input/MuiInput"



export const AddAddress = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressFormDataType>({
    resolver: yupResolver(addressSchema),
  });
  const { loading } = useAppSelector(state => state.address)
  const dispatch = useAppDispatch()
  const onSubmit = (data: AddressFormDataType) => {
    dispatch(createAddressAction(data))
  }
  return (
    <Box component="form" sx={modelStyle} onSubmit={handleSubmit(onSubmit)} >
      <Stack spacing={2} sx={{ width: "300px" }}>
        <Typography variant="h6">Add Address</Typography>
        <MuiInput name="street" register={register} errors={errors} />
        <MuiInput name="city" register={register} errors={errors} />
        <MuiInput name="state" register={register} errors={errors} />
        <MuiInput name="country" register={register} errors={errors} />
        <MuiInput name="pincode" register={register} errors={errors} />
        <LoadingButton loading={loading} type="submit" variant="outlined" color="primary">Add Address</LoadingButton>
      </Stack>
    </Box>
  )
}
