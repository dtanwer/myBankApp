import { Box, Modal } from '@mui/material'

type InputModelsProps = {
    open: boolean
    setOpen: (value: boolean) => void
    children: JSX.Element
}

export const InputModels = ({ open, setOpen, children }: InputModelsProps) => {
    return (
        <Box >
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {children}
            </Modal>

        </Box>
    )
}
