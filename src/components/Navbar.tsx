import React from 'react'
import lens1 from "../images/lens1.png"
import profile from "../images/profile.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black flex items-center p-2'>
        <h1 className='ml-36 text-white font-semibold text-2xl'>Prime Video</h1>
        <Link to='/home'><h1 className='cursor-pointer text-gray-300 ml-20 text-lg font-semibold'>Home</h1></Link>
        <h1 className='text-gray-300 ml-96 text-lg font-semibold'>Categories</h1>
        <img src={lens1} className='w-6 h-4 ml-5' />
        <h1 className='text-gray-300 font-semibold ml-5 text-lg font-semibold'>EN</h1>
        <img src={profile} className='w-9 h-9 ml-5' />
    </div>
  )
}

export default Navbar