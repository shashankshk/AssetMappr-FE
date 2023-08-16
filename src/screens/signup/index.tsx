import { useRef, useState, useEffect, SetStateAction, Dispatch, RefObject } from 'react'
import Card from '../../components/card/Card'
import backgroundImage from '../../assets/images/background_image.png'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Background from '../../components/background/Background'
import CommunitySelection from './CommunitySelection'
import DisclaimerScreen from './Disclaimer'
import ProfileInfoScreen from './Profile'
import Step1 from './Step1'
import Step2 from './Step2'
import WelcomeOnSignupScreen from './WelcomeOnSignup'
import apiservice from '../../utils/api/apiservice'
import ErrorMsg from '../../components/content/ErrorMsg'
import { SignupProvider } from './SignUpContext'
// TODO: these imports to be used during API call
// import axios from "../../utils/api/appservice";
// const REGISTER_URL = '/register';

// Component handling the signup functionality for the user
// TODO: for mobile browser view, button needs to be at bottom of screen
const Signup = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const imageUrl = windowWidth >= 480 ? backgroundImage : 'none'
  const [errMsg, setErrMsg] = useState('')
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <SignupProvider>
      <Background classname='App' backgroundImage={imageUrl}>
        <Card classname='card'>
          <Routes>
            <Route path='' element={<CommunitySelection dataKey='signUp' />} />
            <Route path='basicinfo' element={<Step1 dataKey='signUp' setErrMsg={setErrMsg} />} />
            {/* <Route path='password' element={<Step2 baseProps={baseProps} />} /> */}
            <Route path='welcome' element={<WelcomeOnSignupScreen />} />
            <Route path='disclaimer' element={<DisclaimerScreen />} />
            <Route path='profile' element={<ProfileInfoScreen />} />
          </Routes>
          <ErrorMsg className={'offscreen'} label={errMsg} id={''}></ErrorMsg>
        </Card>
      </Background>
    </SignupProvider>
  )
}

export default Signup
