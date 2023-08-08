import { useState, useEffect } from 'react'
import Card from '../../../components/card/Card'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../../../assets/images/background_image.png'
import List from '../../../components/list/List'
import Background from '../../../components/background/Background'
import Header from '../../../components/title/header/Header'
import Button from '../../../components/button/Button'
import Subheader from '../../../components/title/subheader/Subheader'
import { useSignup } from '../SignUpContext'
// The component which contains the disclaimer
// TODO: button at bottom of screen for mobile browser
const DisclaimerScreen = () => {
  const navigate = useNavigate()
  const { data } = useSignup()
  useEffect(() => {
    if (!data.userId) {
      navigate('/signup')
    }
  }, [navigate])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const imageUrl = windowWidth >= 480 ? backgroundImage : 'none'

  const items = [
    { key: 1, data: 'Providing data about your race, ethnicity and sex is OPTIONAL.' },
    { key: 2, data: 'You will NOT be asked to provide this data again.' },
    { key: 3, data: 'Your data cannot be used to track or identify you.' },
    { key: 4, data: 'All data will be analyzed collectively in a secure database.' },
    {
      key: 5,
      data: 'Planners and app developers do NOT have access to individual user information or profiles.',
    },
    { key: 6, data: 'You are the sole owner of your data.' },
    {
      key: 7,
      data: 'By participating, you are making a valuable contribution to your community. Thank you for your trust and support!',
    },
  ]
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const next = async () => {
    navigate('/signup/profile')
  }
  return (
    <>
      <Header classname='profile_info_title' content='Profile Information' />
      <Subheader
        classname='disclaimer_subtitle'
        content='Your privacy and security are our top priorities. As you begin using the app, please keep in mind that the following questions are designed to help community planners identify the unique characteristics of participants. This information is crucial for planning purposes and grant applications.'
      />
      <p className='disclaimer_content'>
        <span className='content_title'>Before we begin</span> <br></br>
        We want to assure you that: <br></br>
        <br></br>
        <List classname='disclaimer_list' content={items}></List>
      </p>
      <Button type='submit' value='Continue' flexible size='large' onClick={next}>
        Continue
      </Button>
    </>
  )
}

export default DisclaimerScreen
