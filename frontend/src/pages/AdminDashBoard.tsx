import { Box, Typography } from '@mui/material'
import { Dashboard } from '../components/AdminDashboard/Dashboard'
import { NavBar } from '../components/Navbar/NavBar'
export const AdminDashBoard = () => {
  return (
    <Box>
      <NavBar/>
      <Dashboard/>
    </Box>
  )
}
