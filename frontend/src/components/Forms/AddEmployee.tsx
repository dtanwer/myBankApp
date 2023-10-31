import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material"
import { modelStyle } from "../../utils/modelStyle"
import { addressSchema } from "../../schema/BankSchma"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import { EmployeeFormDataType } from "../../@Types/Form"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { createAddressAction } from "../../features/address/address.action"
import { LoadingButton } from "@mui/lab"
import { MuiInput } from "../input/MuiInput"
import { employeeSchema } from "../../schema/Employee"
import { createEmployeeAction } from "../../features/admin/admin.action"
import { MuiAutoComplete } from "../input/MuiAutoComplete"
import { useEffect, useMemo } from "react"
import { getBanksAction } from "../../features/bank/bank.action"
import { getBanksOptions, typeOptions } from "../../utils/employee"



export const AddEmployee = () => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<EmployeeFormDataType>({
    resolver: yupResolver(employeeSchema),
  });
  const { loading } = useAppSelector(state => state.address)
  const { banks } = useAppSelector(state => state.bank)
  const dispatch = useAppDispatch()
  const onSubmit = (data: EmployeeFormDataType) => {
    dispatch(createEmployeeAction({
      ...data,
      bankId: data.bankId.value,
      role: data.type.value
    }))
  }
  useEffect(() => {
    dispatch(getBanksAction())
  }, [])
  const bankOptions = useMemo(() => getBanksOptions(banks), [banks])
  return (
    <Box component="form" sx={modelStyle} onSubmit={handleSubmit(onSubmit)} >
      <Stack spacing={2} sx={{ width: "300px" }}>
        <Typography variant="h6">Add Employee</Typography>
        <MuiInput name="name" register={register} errors={errors} />
        <MuiInput name="email" register={register} errors={errors} />
        <MuiAutoComplete name="type" options={typeOptions} register={register} errors={errors} control={control} />
        <MuiAutoComplete name="bankId" options={bankOptions} register={register} errors={errors} control={control} />
        <LoadingButton loading={loading} type="submit" variant="outlined" color="primary">Add Employee</LoadingButton>
      </Stack>
    </Box>
  )
}
