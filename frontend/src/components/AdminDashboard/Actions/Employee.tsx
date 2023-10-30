import React from 'react'
import { modelStyle } from '../../../utils/modelStyle'
import { Box } from '@mui/material'
import { AddEmployee } from '../../Forms/AddEmployee'

export const Employee = () => {
  return (
    <Box sx={modelStyle}>
      <AddEmployee/>
    </Box>
  )
}
