import React from 'react'
import primes from '../images/primes.png'

const CreateAccount = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={primes} className='w-50 h-24'/>
        <div className='p-6 border border-gray-500 rounded-lg'>
            <h1 className='text-xl font-medium'>Create Account</h1>
            <label className='font-semibold'>Your Name</label>
            <input type="text"  className="border mt-2 border-gray-400 text-gray-900 text-sm rounded-sm block w-80 h-9 p-2.5" required placeholder='first and last name' />
            <label className='font-semibold'>Email </label>
            <input type="text"  className="border mt-2 border-gray-400 text-gray-900 text-sm rounded-sm block w-80 h-9 p-2.5" required placeholder='Email Address'/>
            <h1 className='text-xs text-blue-700 hover:underline hover:text-orange-400'>Use mobile phone number instead</h1>
            <label className='font-semibold'>Password</label>
            <input type="text"  className="border mt-2 border-gray-400 text-gray-900 text-sm rounded-sm block w-80 h-9 p-2.5" required placeholder='password' />
            <h1 className='text-sm mt-7'>To verify email we will send you link. click the link</h1>
            <button className="bg-yellow-300 h-9 hover:bg-yellow-500 w-80 text-black  px-4 rounded-lg mt-4">
                Create Your Amazon Account
            </button>
            <h1 className='text-sm mt-4'>By continuing, you agree to the Amazon Conditions of<br /> Use and Privacy Notice.</h1>
            <hr className='mt-3'/>
            <h1 className=' text-black text-sm mt-4'>Already have an Account?<span className='text-blue-700'>Sign in</span></h1>
        </div>
       
       
        {/* <div className='bg-gray-100 h-40 mt-8 text-center w-full'>
          <h1 className='text-sm text-blue-700 mt-3'>Terms and Privacy notice</h1>
        </div> */}
    </div>
  )
}

export default CreateAccount