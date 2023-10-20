import { Box, Input, InputBase } from '@mui/material'
import React from 'react'

export const AtmFinder = () => {
  return (
    <Box className="atmfinder">
      <InputBase className='searchAtmInput' placeholder='City, State or Zip' /> 
      <button>FIND ATM</button>
    </Box>
  )
}
