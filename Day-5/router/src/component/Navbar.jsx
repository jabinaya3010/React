import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='flex justify-around'>
    <div className='text-shadow-blue-100 mx-10'>
        logo
    </div>
    <div className='flex justify-between gap-5 mx-10'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/HelpDesk">HelpDesk</Link>
        <Link to="/ContactUs">ContactUs</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar