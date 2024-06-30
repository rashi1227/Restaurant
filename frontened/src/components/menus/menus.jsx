import React from 'react'
import Navbar from '../Navbar'
import Menu from '../Menu'
import Footer from '../Footer'

function menus() {

  return (
    <div>
     <Navbar/>
        <div className='min-h-screen'>
        <Menu/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default menus
