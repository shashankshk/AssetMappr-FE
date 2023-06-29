import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginSignup from './screens/LoginSignup'
import Signup from './screens/Signup'
import Login from './screens/Login'
import HomeScreen from './screens/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginSignup />} />
      <Route path='/signup/*' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<HomeScreen />} />
    </Routes>
  )
}
