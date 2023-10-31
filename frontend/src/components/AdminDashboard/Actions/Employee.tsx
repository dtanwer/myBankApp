import React, { useEffect } from 'react'
import { modelStyle } from '../../../utils/modelStyle'
import { Box } from '@mui/material'
import { AddEmployee } from '../../Forms/AddEmployee'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Notification from '../../../app/Notification'
import { deleteError } from '../../../features/admin/admin.slice'

type EmployeeProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Employee = ({setOpen}:EmployeeProps) => {
  const notification = Notification()
  const { message, type } = useAppSelector(state => state.admin)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (message && type) {
      notification(message, type)
    }
    setTimeout(() => {
      dispatch(deleteError())
    }, 1000);

    if (type === 'success') {
      setOpen(false);
    }
  }, [message, type])
  return (
    <Box sx={modelStyle}>
      <AddEmployee />
    </Box>
  )
}
