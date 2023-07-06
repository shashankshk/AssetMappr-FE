import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginSignup from './screens/LoginSignup'
import Signup from './screens/signup'
import Login from './screens/Login'
import HomeScreen from './screens/Home'
import { AuthProvider } from './components/authProvider'
import ProtectedRoute from './components/protectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/home'
          element={
            <ProtectedRoute authenticationPath='/login'>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        {/* <ProtectedRoute component={<HomeScreen />} /> */}
        <Route path='/' element={<LoginSignup />} />
        <Route path='/signup/*' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomeScreen />} />
      </Routes>
    </AuthProvider>
  )
}
