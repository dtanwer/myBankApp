import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import { getBanksAction } from "../../features/bank/bank.action";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getBanksOptions } from "../../utils/employee";
import { MuiAutoComplete } from "../input/MuiAutoComplete";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { optionFields } from "../../@Types/Form";


export const SelectBranch = () => {
    const dispatch = useAppDispatch()
    const { banks } = useAppSelector(state => state.bank)
    const [branch, setBranch] = useState('');

    useEffect(() => {
        dispatch(getBanksAction())
    }, [])
    const bankOptions = useMemo(() => getBanksOptions(banks), [banks])

    const handleChange = (event: SelectChangeEvent) => {
        setBranch(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                label="Branch"
               sx={{width:"200px", display:"flex",justifyContent:"space-between"}}
              
                onChange={handleChange}
            >
                {bankOptions.map((option:optionFields) => <MenuItem value={option.value}>{option.label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
