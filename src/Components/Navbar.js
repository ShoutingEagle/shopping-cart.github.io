import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='shopping-cart-button'>Shopping Cart</div>
        <div className='navbar-right'>
            <div className='home-button'>Home</div>
            <div className='cart-page-button'>Cart Page</div>
        </div>
    </div>
  )
}

export default Navbar