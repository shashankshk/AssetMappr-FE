import { useRef, useState, useEffect, useContext } from 'react'
import Card from '../../components/card/Card'
import backgroundImage from '../../assets/images/background_image.png'
import Background from '../../components/background/Background'
import Header from '../../components/title/header/Header'
import InputField from '../../components/input/inputfield/InputField'
import Button from '../../components/button/Button'
import api from '../../utils/api/apiservice'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../contexts/authContext'
// Component handling the login functionality for the user
const Login = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { login } = useContext(AuthContext)
  const imageUrl = windowWidth >= 480 ? backgroundImage : 'none'
  const navigate = useNavigate()
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  const userRef = useRef<HTMLInputElement>(null)

  // TODO: these variables will be used for the API call to backend - to be uncommented then
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event: any) => {
    // axios api
    event.preventDefault()
    login({ email: user, password })
  }

  return (
    <Background classname='App' backgroundImage={imageUrl}>
      <Card classname='card'>
        <Header classname='login_header' content='Asset Mappr' />
        <Header classname='subheader' content='Login' />
        <form onSubmit={handleLogin}>
          <div className='input_container'>
            <InputField
              type='email'
              id='username'
              className='required-field'
              placeholder='Email'
              ref={userRef}
              autocomplete='off'
              required={true}
              value={user}
              onchange={(e) => setUser(e.target.value)}
            />
            <InputField
              type='password'
              id='username'
              className='required-field'
              placeholder='Password'
              ref={userRef}
              autocomplete='off'
              required={true}
              value={password}
              onchange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type='submit' value='Login' className='loginscreen_button'>
            Login
          </Button>
        </form>
      </Card>
    </Background>
  )
}

export default Login

// onChange={(e) => setUser(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}
