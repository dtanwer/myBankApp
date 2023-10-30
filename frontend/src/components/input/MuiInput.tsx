import { TextField } from "@mui/material"
type MuiInputProps = {
    register: any,
    errors:  any ,
    name:  string,
}
export const MuiInput = ({errors,register,name}:MuiInputProps) => {
    const label=name.charAt(0).toUpperCase()+name.slice(1)
    return (
        <TextField fullWidth size='small' label={label} variant="outlined"
            {...register(name)}
            error={!!errors[name]}
            helperText={errors[name]?.message}
        />
    )
}
