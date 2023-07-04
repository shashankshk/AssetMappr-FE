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
// import LandingPage from './components/section/LandingPageOld';
import { Desktop } from './components/section/LandingPageSample';
import LandingPage from './screens/landingpage/LandingPage';

export default function App() {
  return (
    <Routes>
      {/* TODO: After finishing the routing, uncomment the below line to view landing page on opening application
       <Route path="/" element={<LandingPage/>} /> */}
       
      <Route path="/" element={<Welcome/>} /> 
      <Route path="welcomecont" element={<WelcomeScreen/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signupcontinue" element={<Signupcontinue/>} />
      <Route path="onsignup" element={<WelcomeOnSignupScreen/>} />
      <Route path="disclaimer" element={<DisclaimerScreen/>} />
      <Route path="profile" element={<ProfileInfoScreen/>} />
      <Route path="home" element={<HomeScreen/>} />
    </Routes>
  );
}