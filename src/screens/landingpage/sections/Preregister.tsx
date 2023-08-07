import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import InputField from '../../../components/input/inputfield/InputField'
import Button from '../../../components/button/Button'
import TextArea from '../../../components/input/textarea/TextArea'

const Preregister = () => {
  return (
    <Frame
      id='preregister'
      classname='-2'
      leftchildren={
        <>
          <Header classname='frame-2-header' content='Pre-register now!'></Header>
          <Description
            classname='frame-2-description'
            content=' If you believe that our innovative solution can make a positive impact, we are eager to connect with you.
                                    Take the first step by pre-registering today, and rest assured, we&#39;ll reach out to you promptly once
                                    our product is launched!'
          ></Description>
        </>
      }
      rightchildren={
        <>
          <form>
            <InputField
              type='text'
              placeholder='Type in your community’s name'
              className='frame-2-small-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Enter your name'
              className='frame-2-small-field'
            ></InputField>
            <InputField
              type='text'
              placeholder='Enter your email here'
              className='frame-2-small-field'
            ></InputField>
            <TextArea
              classname='frame-textarea'
              name='frame-2-textarea'
              rows={12}
              cols={50}
              placeholder='Tell us about your role in the community and how you envision utilizing our app.'
            />
            <Button type='submit' value='Pre-register now!' size='large' flexible>
              Pre-register now!
            </Button>
          </form>
        </>
      }
    />
  )
}

export default Preregister
