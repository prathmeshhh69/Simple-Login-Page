import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-violet-300 p-4 flex justify-between items-center h-20'>
        <div className='m-4 text-4xl font-bold '>
          <h1>Arrow</h1>
        </div>
        <div className='flex text-2xl gap-8 '>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>Profile</h1>

        </div>
      
    </div>
  )
}

export default Navbar
