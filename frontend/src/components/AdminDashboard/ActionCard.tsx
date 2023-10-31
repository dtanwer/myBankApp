import { Box, Typography } from '@mui/material'
import { useState } from 'react';
import { InputModels } from '../InputModel/InputModels';
import { set } from 'react-hook-form';
import { AddBank } from '../Forms/AddBank';
import { Bank } from './Actions/Bank';
import { Employee } from './Actions/Employee';
type ActionCardProps = {
    icon: string,
    text: string
}
export const ActionCard = ({ icon, text }: ActionCardProps) => {
    const [open, setOpen] = useState(false);
    const handelClick = (text: string) => {
        setOpen(true)
        console.log("clicked", text)
    }
    return (
        <>
            <Box className="actionCard" onClick={() => handelClick(text)}>
                <img src={icon} alt="create bank" width={120} height={120} />
                <Typography variant="body1" color="primary">{text}</Typography>
            </Box>
            <InputModels open={open} setOpen={setOpen}>
                {text === 'Create Bank' ?
                    <Bank setOpen={setOpen} /> :
                    <Employee setOpen={setOpen}/>
                }

            </InputModels>
        </>
    )
}
