import React from 'react'
import logo from '../assets/kalticslogo.png'

const Navbar = () => {
  return (
    <nav className='h-9 mb-20 flex items-center justify-between py-9'>
       <div className='flex flex-shrink-0 items-center'>
         <img src={logo} alt='logo' className='w-40 cursor-pointer'/>
       </div>
    </nav>
  )
}

export default Navbar
