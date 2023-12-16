import React from 'react'
import primes from '../images/primes.png'

const Signin = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={primes} className='w-50 h-24'/>
        <div className='p-6 border border-gray-500 rounded-lg'>
            <h1 className='text-xl font-medium'>Sign in</h1>
            <label className='font-semibold'>Email or Mobile Phone Number</label>
            <input type="text"  className="border mt-4 border-gray-800 text-gray-900 text-sm rounded-sm block w-80 h-9 p-2.5" required />
            <button className="bg-yellow-300 h-9 hover:bg-yellow-500 w-80 text-black py-2 px-4 rounded-lg mt-4">
                Button
            </button>
            <h1 className='text-sm mt-4'>By continuing, you agree to the Amazon Conditions of<br /> Use and Privacy Notice.</h1>
            <h1 className='mt-4'>Need help?</h1>
        </div>
        <h1 className='text-center text-gray-400 text-sm'>New to Amazon ?</h1>
        <button className='border border-gray-300 p-1 rounded-lg w-96 shadow-lg mt-4'>Create your Amazon account</button>
        {/* <div className='bg-gray-100 h-40 mt-8 text-center w-full'>
          <h1 className='text-sm text-blue-700 mt-3'>Terms and Privacy notice</h1>
        </div> */}
    </div>
  )
}

export default Signin