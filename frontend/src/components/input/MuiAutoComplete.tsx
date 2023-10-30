import { Autocomplete, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
type MuiAutoCompleteProps = {
    options: string[]
    name: string
    register: any
    errors: any
    control:any
    defaultValue?:string
}
export const MuiAutoComplete = ({ options, name, errors,control }: MuiAutoCompleteProps) => {
    const label = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Autocomplete
                    disablePortal
                    id="combo"
                    options={options}
                    fullWidth
                    onChange={(event, value) => field.onChange(value)}
                    renderInput={(params) => (
                        <TextField
                            error={!!error}
                            helperText={error?.message}
                            {...params}
                            label={label}
                            fullWidth
                            size="small"
                            inputRef={ref}
                        />
                    )}
                />
            )}
        />

    )
}
