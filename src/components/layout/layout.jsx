import React from 'react'
import Header from '../header/header'
import Home from '../../pages/home'
import Footer from '../footer/footer'
import signinPage from '../../pages/signinPage'

const Layout = () => {
  return (
    <div>
      <Header />
      <signinPage />
      <Footer />
    </div>
  )
}

export default Layout
