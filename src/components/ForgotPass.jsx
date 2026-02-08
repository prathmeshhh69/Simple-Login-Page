import React from 'react'
import {useNavigate} from 'react-router-dom'

const ForgotPass = () => {
    const navigate=useNavigate();
  return (
    <div className='bg-white w-96 p-6 rounded-2xl flex flex-col gap-7'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p>Your memory is kinda weak bro!</p>

        <input className='h-10 w-70 border p-3' type='text' placeholder='Enter your Email'></input>
        <h1 className='mt--10'>OR</h1>
        <input className='h-10 w-70 border p-3' type='text' placeholder='Enter Mobile Number'></input>
            <button onClick={()=>{
                navigate('/getotp')
            }} className='w-70 border bg-blue-500 text-white cursor-pointer active:scale-95 p-3 rounded-xl'>Get OTP</button>
        
      
    </div>
  )
}

export default ForgotPass
