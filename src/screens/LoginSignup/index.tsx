import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import backgroundImage from '../../images/background_image.png'
import Card from '../../components/card/Card'
import Background from '../../components/background/Background'
import Button from '../../components/button/Button'
import ShortLink from '../../components/shortlink/ShortLink'
import Header from '../../components/title/header/Header'
import Subheader from '../../components/title/subheader/Subheader'
// Component for the second screen which prompts user to either sign up or login
const WelcomeScreen = () => {
  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const imageUrl = windowWidth >= 480 ? backgroundImage : 'none'

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  // navigating to signup page on button click
  const signup = async () => {
    navigate('/signup')
  }
  // navigating to login page on button click
  const login = async () => {
    navigate('/login')
  }

  return (
    <Background classname='App' backgroundImage={imageUrl}>
      <Card classname='card'>
        <Header classname='welcome_title' content='Welcome to Asset Mappr!' />
        <Subheader classname='welcome2_subtitle' content='Login or Sign Up to get started' />
        <Button type='submit' value='Sign Up' className='signup_button' onClick={signup}>
          Sign Up
        </Button>
        <Button type='submit' value='Login' className='login_button' onClick={login}>
          Login
        </Button>
        <ShortLink href='' classname='skip' label='Skip for now'></ShortLink>
      </Card>
      <ShortLink href='' classname='admin' label='Sign in with admin code'></ShortLink>
    </Background>
  )
}

export default WelcomeScreen
