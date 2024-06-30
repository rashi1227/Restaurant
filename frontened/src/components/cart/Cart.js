import React from 'react'
import Navbar from '../Navbar'
import AddToCart from '../AddToCart'
import Footer from '../Footer'

function Cart() {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <AddToCart/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Cart
