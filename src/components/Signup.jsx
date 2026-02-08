import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    
    const navigate = useNavigate();
  return (
   <div className='bg-white w-96 p-6 rounded-2xl flex flex-col gap-9'>
    <div className='flex justify-between items-center '>
            <button onClick={()=>{
                navigate('/');
            }} className='bg-gray-300 border-black-2 p-3 w-30 h-13 rounded-xl cursor-pointer active:scale-93'>Login</button>
            <button className='bg-blue-500 border-black-2 p-3 w-30 h-13 rounded-xl cursor-pointer active:scale-93'>Sign Up</button>
          </div>
          <h1 className='text-3xl font-bold'>SignUp</h1>
          <div className='flex flex-col gap-9'>
            <input className='p-3 w-79 border rounded-md' type='text' placeholder='Enter your Username'></input>
            <input className='p-3 w-79 border rounded-md' type='text' placeholder='Enter your Email'></input>
            <input className='p-3 w-79 border rounded-md' type='text' placeholder='Enter your Password'></input>
            <input className='p-3 w-79 border rounded-md' type='text' placeholder='Confirm your Password'></input>
            <button className='w-79 p-3 bg-blue-700 text-white rounded-xl'> Register </button>
          </div>
         
          
        </div>
  )
}

export default Signup
