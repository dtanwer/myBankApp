import React from 'react'
import { NavBar } from '../components/Navbar/NavBar'
import { Banner } from '../components/Bannner/Banner'
import { InfoCarousel } from '../components/InfoCarousel/InfoCarousel'
import { ChatNow } from '../components/ChatNow/ChatNow'
import { useAppSelector } from '../app/hooks'
import { Box } from '@mui/material'
import { UserDashBoard } from '../components/Dashboard/UserDashBoard'

export const Home = () => {
  const { user } = useAppSelector(state => state.auth)
  return (
    <div>
      <NavBar />
      {user ? <UserDashBoard />
        : <Box>
          <Banner />
          <InfoCarousel />
        </Box>}
      <ChatNow />
    </div>
  )
}
