import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './screens/welcome/Welcome';
import WelcomeScreen from './screens/welcomecont/WelcomeCont';
import Signup from './screens/signup/Signup';
import Signupcontinue from './screens/signup/Signupcont';
import WelcomeOnSignupScreen from './screens/welcomeonsignup/WelcomeOnSignup';
import DisclaimerScreen from './screens/disclaimer/Disclaimer';
import ProfileInfoScreen from './screens/profile/ProfileInfo';
import Login from './screens/login/Login';
import HomeScreen from './screens/home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="welcomecont" element={<WelcomeScreen/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signupcontinue" element={<Signupcontinue/>} />
      <Route path="welcome3" element={<WelcomeOnSignupScreen/>} />
      <Route path="disclaimer" element={<DisclaimerScreen/>} />
      <Route path="profile" element={<ProfileInfoScreen/>} />
      <Route path="home" element={<HomeScreen/>} />
    </Routes>
  );
}