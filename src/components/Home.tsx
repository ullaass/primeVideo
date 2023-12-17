import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ironman1 from "../images/ironman1.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from './Navbar';
const Home = () => {
  return (

    <>
        <Navbar />
         <div className='grid grid-rows-2'>
        <div className='bg-black pl-7 h-screen'>
            <h1 className='text-white text-5xl font-semibold ml-5 mt-4'>Movies</h1>
            <Carousel className='h-96 w-full mt-8' showThumbs={false} autoPlay={true}>
                <div style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.1)) , url(${ironman1})` , backgroundRepeat:"no-repeat", backgroundSize:"1200px 400px"}} className='h-96 w-full'>
                   
                </div>
                <div style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.1)) , url(${ironman1})` , backgroundRepeat:"no-repeat", backgroundSize:"1200px 400px"}} className='h-96 w-full'>
                   
                   </div>
                   <div style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.1)) , url(${ironman1})` , backgroundRepeat:"no-repeat", backgroundSize:"1200px 400px"}} className='h-96 w-full'>
                   
                   </div>
            </Carousel>
        </div>
        <div></div>
    </div>
    </>
   
  )
}

export default Home