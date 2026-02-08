import React from 'react'
import {useNavigate} from 'react-router-dom'

const Final = () => {
    const navigate=useNavigate();
  return (
     <div className='bg-white w-96 p-6 rounded-2xl flex flex-col gap-7'>
        <h1 className='text-3xl font-bold'>You are done lil bro You got fooled🤣 </h1>
        

        

        
        
    <button onClick={()=>{
      navigate('/')
    }} className='w-70 border bg-blue-500 text-white cursor-pointer active:scale-95 p-3 rounded-xl'>HomePage</button>
        
      
    </div>
  )
}

export default Final
