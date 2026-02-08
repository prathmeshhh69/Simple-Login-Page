import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import {Routes, Route} from 'react-router-dom'
import ForgotPass from './components/ForgotPass'
import GetOTP from './components/GetOTP'
import Final from './components/Final'

const App = () => {
  return (
    <div>
      <Navbar />
     
      <div className='min-h-screen flex justify-center items-center bg-purple-400'>
         <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/getotp' element={<GetOTP/>} />
        <Route path='/final' element={<Final/>} />
      </Routes>
       </div>
    </div>
  )
}

export default App
