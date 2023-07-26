import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../../components/background/Background'
import Navcontainer from '../../components/navbar/Navcontainer'
import Intro from './sections/Intro'
import Preregister from './sections/Preregister'
import Features from './sections/Features'
import Benefits from './sections/Benefits'
import Team from './sections/Team'
import Contact from './sections/Contact'

const items = [
  { key: 1, href: '#features', data: 'Features' },
  { key: 2, href: '#benefits', data: 'Benefits' },
  { key: 3, href: '#team', data: 'Team' },
  { key: 4, href: '#contact', data: 'Contact Us' },
]
// The landing page screen which the user first sees before signup/login.
const LandingPage = () => {
  // setting the toggle view. This will help displaying the hamburger menu in the mobile browser.
  const [toggleView, setToggleView] = useState(false)
  const navigate = useNavigate()

  const displayToggleView = () => {
    if (!toggleView) {
      setToggleView(true)
    } else {
      setToggleView(false)
    }
  }

  // navigating to signup page on button click
  const signup = async () => {
    navigate('/signup')
  }
  // navigating to login page on button click
  const login = async () => {
    navigate('/login')
  }

  return (
    <Background classname='landing-page' id='landing'>
        <Navcontainer subheaderprops={{
          classname: 'nav-title',
          content: 'Asset Mappr',
        }} hamburgerprops={{
          classname: 'bar',
          onClick: displayToggleView
        }} listprops={{
          classname: 'nav-options-list',
          classnameli: 'nav-options-items',
          contentlist: items,
          toggleView: toggleView
        }} buttonprops1={{
          classname: 'user-signup',
          buttontype: 'button',
          content: 'Signup',
          value: 'user-signup',
          onClick: signup
        }} buttonprops2={{
          classname: 'user-login',
          type: 'button',
          content: 'User Login',
          value: 'user-login',
          onClick: login
        }}/>
      <Intro/>
      <Preregister/>
      <Features/>
      <Benefits/>
      <Team/>
      <Contact/>
    </Background>
  )
}

export default LandingPage
