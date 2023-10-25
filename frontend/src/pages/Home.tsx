import React from 'react'
import { NavBar } from '../components/Navbar/NavBar'
import { Banner } from '../components/Bannner/Banner'
import { InfoCarousel } from '../components/InfoCarousel/InfoCarousel'
import { ChatNow } from '../components/ChatNow/ChatNow'

export const Home = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <InfoCarousel/>
        <ChatNow/>
    </div>
  )
}
