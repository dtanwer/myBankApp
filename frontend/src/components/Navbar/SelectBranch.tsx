import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react";


export const SelectBranch = () => {
    const [branch, setBranch] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setBranch(event.target.value);
    };
    return (
        <FormControl sx={{  minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label" >Branch</InputLabel>
            <Select
                size="small"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={branch}
                label="Seclect Branch"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Palwal</MenuItem>
                <MenuItem value={20}>Fbd</MenuItem>
                <MenuItem value={30}>Hathin</MenuItem>
            </Select>
        </FormControl>
    )
}
