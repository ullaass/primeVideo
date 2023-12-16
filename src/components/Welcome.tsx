import React from 'react'
import ironman from "../images/ironman.jpg"
const Welcome = () => {
  return (
    <div className='bg-black grid grid-cols-2 w-screen text-white'>
        <div className='p-8'>
            <h1 className='text-5xl text-gray-300 mt-4'>Welcome to Prime Video</h1>
            <h1 className='text-2xl text-gray-200 mt-6'>Watch the movies,TV shows and award winning Prime Originals.</h1>
            <button className='bg-sky-700 p-3 rounded-sm w-72 mt-3 text-lg'>Signin to join Prime</button>
        </div>
        <div className='h-screen pt-44 pl-10' style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(${ironman})`, backgroundRepeat:"no-repeat", backgroundSize:"760px 560px"}}>
            <h1 className='text-gray-300 text-6xl'>Ironman</h1>
            <h1 className='ml-20'>New Movie</h1>
        </div>
      
    </div>
  )
}

export default Welcome

// import React from 'react'

// const Welcome = () => {
//   return (
//     <div >Welcome</div>
//   )
// }

// export default Welcome