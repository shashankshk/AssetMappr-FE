import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import Footer from '../../../components/footer/Footer'
import InputField from '../../../components/input/inputfield/InputField'
import Button from '../../../components/button/Button'

const Contact = () => {
  return (
    <Frame classname='-6'
    leftchildren = {
        <>
            <Header classname='frame-footer-header' content='We’d love to hear from you!'></Header>
            <Description
            classname='frame-footer-description'
            content='We’re currently building a new platform from the ground up and always looking for people to collaborate with in different ways. Send us your email with a message and we will get back to you.'
            ></Description>
            <Footer
            classname='footer'
            content='© 2023 Asset Mappr. Copyright and rights reserved.'
            ></Footer>
        </>
    }
    rightchildren = {
        <>
        <div className='frame-6-right'>
          <form>
            <InputField
              type='text'
              placeholder='Enter your email here'
              className='frame-6-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Type in your message'
              className='frame-6-big-field'
            ></InputField>
          </form>
          <Button type='button' value='Submit' className='submit-button'>
            SUBMIT
          </Button>
        </div>
        <Footer
          classname='mobile-footer'
          content='© 2023 Asset Mappr. Copyright and rights reserved.'
        ></Footer>
        </>
    }
    />
  )
}

export default Contact