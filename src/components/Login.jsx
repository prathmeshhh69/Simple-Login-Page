import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
     <div className='bg-white w-96 p-6 rounded-2xl flex flex-col gap-9'>
        <div className='flex justify-between items-center '>
            <button className='bg-blue-500 text-white border-black-2 p-3 w-30 h-13 rounded-xl cursor-pointer active:scale-93'>Login</button>
            <button onClick={()=>{
                navigate('/signup')
            }} className='bg-gray-300 border-2 p-3 w-30 h-13 rounded-xl cursor-pointer active:scale-93'>Sign Up</button>
          </div>
          <h1 className='text-3xl font-bold'>Login</h1>
          <div className='flex flex-col gap-9'>
            <input className='p-3 w-79 border rounded-md' type='text' placeholder='Enter your Username'></input>
            <input className='p-3 w-79 border rounded-md' type='text' placeholder='Enter your Password'></input>
            <button className='p-3 w-79 border rounded-xl bg-blue-700 text-white mt-5'>Get me IN!</button>
          </div>
          <div className='flex flex-col gap-6'>
            <Link to='/forgotpass' className='text-blue-400 '>
              Forgot Password?
            </Link>
            <Link to='/signup' className='text-blue-400'>
              New User? Register Here
            </Link>
          </div>
          
        </div>

      
  )
}

export default Login
