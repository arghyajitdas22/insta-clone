
import React from 'react'
import BigSideNav from './BigSideNav'
import Footer from './Footer'
import Header from './Header'
import TabSideNav from './TabSideNav'

function Navigation() {
  return (
    <div>
      <Header />
      <Footer />
      
      <TabSideNav/>
      
      <BigSideNav/>
    </div>
  )
}

export default Navigation
