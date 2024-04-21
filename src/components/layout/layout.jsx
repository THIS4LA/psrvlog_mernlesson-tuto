import React from 'react'
import Header from '../header/header'
import Home from '../../pages/home'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
