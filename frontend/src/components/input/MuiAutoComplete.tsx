import { Autocomplete, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { optionFields } from "../../@Types/Form"
import { stringify } from "querystring"
import { useEffect } from "react"
type MuiAutoCompleteProps = {
    options: optionFields[]
    name: string
    register: any
    errors: any
    control: any
}
export const MuiAutoComplete = ({ options, name, errors, control }: MuiAutoCompleteProps) => {
    const label = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, value,...field }, fieldState: { error } }) =>
            (
               
                <Autocomplete
                    disablePortal
                    id={name}
                    options={options}
                    fullWidth
                    value={value}
                    onChange={(event, value) => field.onChange(value)}
                    renderInput={(params) =>
                         (
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
            rules={{ required: `${label} is required` }}
        />

    )
}
