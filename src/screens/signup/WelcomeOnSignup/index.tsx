import { useNavigate } from 'react-router-dom'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../components/icon/Icon'
import Header from '../../../components/title/header/Header'
import Button from '../../../components/button/Button'
import { useSignup } from '../SignUpContext'
import { useEffect } from 'react'
// component showing the welcome message to users after signing up
// TODO: for mobile browser view, button needs to be at bottom of screen
const WelcomeOnSignupScreen = () => {
  const navigate = useNavigate()
  const { data } = useSignup()
  useEffect(() => {
    if (!data.userId) {
      navigate('/signup')
    }
  }, [navigate])
  const next = async () => {
    navigate('/signup/disclaimer')
  }
  return (
    <>
      <Icon classname='checkicon' iconname={faCircleCheck}></Icon>
      <Header classname='welcome3_title' content='Welcome to our community planning app!' />
      <Button type='submit' value='Continue' size='large' flexible onClick={next}>
        Continue
      </Button>
    </>
  )
}

export default WelcomeOnSignupScreen
