import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Subheader from '../../../components/title/subheader/Subheader'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import Button from '../../../components/button/Button'
import Image from '../../../components/image/Image'
import frame1Image from '../../../assets/images/frame-1-image.svg' 

const Intro = () => {
  return (
    <Frame classname='' 
        leftchildren = {
          <>
          <Subheader classname='frame-1-subheader' content='BETA APP' />
            <Header
              classname='frame-1-header'
              content='Unlock your community&#39;s potential with Asset Mappr'
            />
            <Description
              classname='frame-1-description'
              content='Asset Mappr is a digital tool that helps you engage with your community and collect valuable information
                                  from them.'
            />
            <Button className='frame-1-button' type='button' value='beta-app'>
              LOGIN TO THE BETA APP
            </Button>
            </>
        }
        rightchildren = {
          <>
            <Image classname='frame-1-image' imgname={frame1Image}></Image>
          </>
        }
      />
  )
}

export default Intro