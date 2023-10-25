import { Box } from '@mui/material'
import './admin.css'
import { ActionCard } from './ActionCard'
import bankIcon from '../../img/bankIcon.png'
import addEmp from '../../img/addEmp.png'

export const DashBoardActions = () => {
  return (
   <Box className="dashBoardAction" >
    <ActionCard icon={bankIcon} text='Create Bank'/>
    <ActionCard icon={addEmp} text='Add Employee'/>   
   </Box>
  )
}
