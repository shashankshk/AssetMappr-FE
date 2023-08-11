import React from 'react'
import { useNavigate } from 'react-router-dom'
import Frame from '../../../components/layouts/Frame'
import Subheader from '../../../components/title/subheader/Subheader'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import Button from '../../../components/button/Button'
import Image from '../../../components/image/Image'
import frame1Image from '../../../assets/images/frame-1-image.svg'
import ShortLink from '../../../components/shortlink/ShortLink'

const Intro = () => {
  const navigate = useNavigate()

  // navigating to loginSignup page on button click
  const loginSignup = async () => {
    navigate('/loginSignup')
  }

  return (
    <Frame
      classname=''
      leftchildren={
        <>
          <Subheader classname='frame-1-subheader' content='BETA APP' size='small'/>
          <Header
            classname='frame-1-header'
            content='Unlock your community&#39;s potential with Asset Mappr' size='xlarge'
          />
          <Description
            classname='frame-1-description'
            content='Asset Mappr is a digital tool that helps you engage with your community and collect valuable information
                                  from them.'
            size='medium'
          />
          <Button type='submit' value='beta-app' onClick={loginSignup} size='medium'>
            LOGIN TO THE BETA APP
          </Button>
          <ShortLink
            classname='mobile-intro-link'
            href='#preregister'
            label='OR PRE-REGISTER YOUR COMMUNITY NOW!'
          ></ShortLink>
        </>
      }
      rightchildren={
        <>
          <Image classname='frame-1-image' imgname={frame1Image}></Image>
        </>
      }
    />
  )
}

export default Intro
