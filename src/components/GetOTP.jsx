import React from 'react'
import {useNavigate} from 'react-router-dom'

const GetOTP = () => {
    const navigate=useNavigate();
  return (
     <div className='bg-white w-96 p-6 rounded-2xl flex flex-col gap-7'>
        <h1 className='text-3xl font-bold'>Enter the OTP </h1>
        <p>An OTP has been sent to your ahh... email</p>

        

        <input className='h-10 w-70 border p-3' type='text' placeholder='Enter OTP'></input>
        
            <button onClick={()=>{
               navigate('/final')
            }} className='w-70 border bg-blue-500 text-white cursor-pointer active:scale-95 p-3 rounded-xl'>Sumbit</button>
        
      
    </div>
  )
}

export default GetOTP
