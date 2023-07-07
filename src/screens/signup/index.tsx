import { useRef, useState, useEffect, SetStateAction, Dispatch, RefObject } from 'react'
import Card from '../../components/card/Card'
import './Signup.css'
import backgroundImage from '../../images/background_image.png'
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

// TODO: these imports to be used during API call
// import axios from "../../utils/api/appservice";
// const REGISTER_URL = '/register';

// Component handling the signup functionality for the user
// TODO: for mobile browser view, button needs to be at bottom of screen
const Signup = () => {
  const userRef = useRef<HTMLInputElement>(null)
  // TODO: all of these variables will be used during API integration with backend
  const [user, setUser] = useState('')
  const [designation, setDesignation] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCommunity, setSelectedCommunity] = useState('')

  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const imageUrl = windowWidth >= 480 ? backgroundImage : 'none'
  // the mobile browser has only 1 signup page. Using these to accommodate that functionality.
  const isMobileView = windowWidth < 480 ? true : false
  const [password, setPassword] = useState('')
  const [reenteredPassword, setReenteredPassword] = useState('')
  const [validMatch, setValidMatch] = useState(false)
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

  // validate the password
  useEffect(
    () => {
      if (password.length) {
        const match = password === reenteredPassword
        setValidMatch(match)
      }
    },
    [reenteredPassword], // when either the pwd or matchPwd field changes, it automatically checks this function and rerenders the page
  )

  const next = async (e: any) => {
    e.preventDefault()
    try {
      const response = await apiservice.post('/user/signup', {
        email: email,
        password: password,
      })
      if (response.status == 201) {
        navigate('/signup/welcome')
      }
    } catch (err: any) {
      console.log(err)
      // if we didn't hear back from the server at all
      if (!err.response) {
        setErrMsg('Server down. Please try again later.')
      } else if (err.response?.status === 409) {
        setErrMsg('User already created. Please sign in.')
      } else {
        setErrMsg('Registration failed')
      }
    }
  }

  const baseProps = {
    user,
    setUser,
    userRef,
    designation,
    setDesignation,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    password,
    setPassword,
    isMobileView,
    reenteredPassword,
    setReenteredPassword,
    validMatch,
    setValidMatch,
    handleSubmission: next,
    selectedCommunity,
    setSelectedCommunity,
  }

  return (
    <Background classname='App' backgroundImage={imageUrl}>
      <Card classname='card'>
        <Routes>
          <Route
            path=''
            element={<CommunitySelection setSelectedCommunity={setSelectedCommunity} />}
          />
          <Route path='basicinfo' element={<Step1 baseProps={baseProps} />} />
          <Route path='password' element={<Step2 baseProps={baseProps} />} />
          <Route path='welcome' element={<WelcomeOnSignupScreen />} />
          <Route path='disclaimer' element={<DisclaimerScreen />} />
          <Route path='profile' element={<ProfileInfoScreen />} />
        </Routes>
        <ErrorMsg className={'offscreen'} label={errMsg} id={''}></ErrorMsg>
      </Card>
    </Background>
  )
}

export default Signup
