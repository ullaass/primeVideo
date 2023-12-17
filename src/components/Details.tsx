import React from 'react'
import ironman1 from "../images/ironman1.jpg"
import Navbar from './Navbar'

const Details = () => {
  return (
    <>
    <Navbar />
        <div className='h-screen w-screen text-white' style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.1)) ,url(${ironman1})` , backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <h1 className='text-6xl font-bold'></h1>
        <h1 className='text-2xl font-semibold mt-10'>Description</h1>
    </div>
    </>
    
  )
}

export default Details