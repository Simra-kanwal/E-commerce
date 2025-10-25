import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ScrollToTop from '../ScrollTop'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
