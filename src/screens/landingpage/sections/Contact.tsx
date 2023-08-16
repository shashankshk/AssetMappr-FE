import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import Footer from '../../../components/footer/Footer'
import InputField from '../../../components/input/inputfield/InputField'
import Button from '../../../components/button/Button'
import TextArea from '../../../components/input/textarea/TextArea'

const Contact = () => {
  return (
    <Frame
      id='contact'
      classname='-6'
      leftchildren={
        <>
          <Header classname='frame-footer-header' content='We’d love to hear from you!' size='large'></Header>
          <Description
            classname='frame-footer-description'
            content='We’re currently building a new platform from the ground up and always looking for people to collaborate with in different ways. Send us your email with a message and we will get back to you.'
            size='medium'
          ></Description>
          <Footer
            classname='footer'
            content='© 2023 Asset Mappr. Copyright and rights reserved.'
          ></Footer>
        </>
      }
      rightchildren={
        <>
          <div className='frame-6-right'>
            <form>
              <InputField
                type='text'
                placeholder='Enter your email here'
                className='frame-6-field'
                size='medium'
              ></InputField>
              <TextArea
                classname='frame-textarea'
                name='frame-6-textarea'
                rows={12}
                cols={50}
                placeholder='Type in your message'
              />
              <Button type='submit' value='Submit' flexible size='large'>
                SUBMIT
              </Button>
            </form>
            <Footer
              classname='mobile-footer'
              content='© 2023 Asset Mappr. Copyright and rights reserved.'
            ></Footer>
          </div>
        </>
      }
    />
  )
}

export default Contact
