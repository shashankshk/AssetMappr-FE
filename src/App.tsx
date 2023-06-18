import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import WelcomeScreen from './components/welcome2/Welcome2';
import Signup from './components/signup/Signup';
import Signupcontinue from './components/signup/Signupcont';
import WelcomeContScreen from './components/welcome3/Welcome3';
import DisclaimerScreen from './components/disclaimer/Disclaimer';
import ProfileInfoScreen from './components/profile/ProfileInfo';
import Login from './components/login/Login';
import HomeScreen from './components/home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="welcome2" element={<WelcomeScreen/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signupcontinue" element={<Signupcontinue/>} />
      <Route path="welcome3" element={<WelcomeContScreen/>} />
      <Route path="disclaimer" element={<DisclaimerScreen/>} />
      <Route path="profile" element={<ProfileInfoScreen/>} />
      <Route path="home" element={<HomeScreen/>} />
    </Routes>
  );
}