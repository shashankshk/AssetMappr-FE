import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginSignup from './screens/LoginSignup'
import Signup from './screens/signup'
import Login from './screens/Login'
import HomeScreen from './screens/Home'
import { AuthProvider } from './components/authProvider'
import ProtectedRoute from './components/protectedRoute'
import LandingPage from './screens/landingpage/LandingPage'
import './assets/styles/main.scss';
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
        <Route path='/' element={<LandingPage />} />
        <Route path='/loginSignup' element={<LoginSignup />} />
        <Route path='/signup/*' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}
