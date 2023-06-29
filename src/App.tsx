import React from 'react'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import LoginSignup from './screens/LoginSignup'
import Signup from './screens/Signup'
// import Signupcontinue from './screens/Signup/Signupcont'
// import WelcomeOnSignupScreen from './screens/Signup/WelcomeOnSignup'
// import DisclaimerScreen from './screens/Signup/Disclaimer'
// import ProfileInfoScreen from './screens/Signup/Profile'
import Login from './screens/Login'
import HomeScreen from './screens/Home'
// import Step1 from './screens/Signup/Step1'
// import Step2 from './screens/Signup/Step2'
// import CommunitySelection from './screens/Signup/CommunitySelection'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginSignup />} />
      <Route path='/signup/*' element={<Signup />}>
        {/* <Route path='' element={<CommunitySelection />} />
        <Route path='basicinfo' element={<Step1 />} />
        <Route path='password' element={<Step2 />} />
        <Route path='welcome' element={<WelcomeOnSignupScreen />} />
        <Route path='disclaimer' element={<DisclaimerScreen />} />
        <Route path='profile' element={<ProfileInfoScreen />} /> */}
      </Route>
      <Route path='/login' element={<Login />} />
      {/* <Route path='/signupcontinue' element={<Signupcontinue />} /> */}
      {/* <Route path='/onsignup' element={<WelcomeOnSignupScreen />} /> */}
      {/* <Route path='/disclaimer' element={<DisclaimerScreen />} /> */}
      {/* <Route path='/profile' element={<ProfileInfoScreen />} /> */}
      <Route path='/home' element={<HomeScreen />} />
    </Routes>
  )
}
