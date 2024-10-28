import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import EndSection from '../components/EndSection'
import { ToastContainer } from 'react-toastify'

function HomeLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return (
    <>
        <ToastContainer />
        <Header/>
        <Outlet/>
        <EndSection/>
        <Footer/>
    </>
  )
}

export default HomeLayout