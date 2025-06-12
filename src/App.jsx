import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import Shop from './Pages/Shop'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
