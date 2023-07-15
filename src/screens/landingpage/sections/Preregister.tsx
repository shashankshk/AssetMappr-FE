import React from 'react'
import Frame from '../../../components/layouts/Frame'
import Header from '../../../components/title/header/Header'
import Description from '../../../components/content/Description'
import InputField from '../../../components/input/inputfield/InputField'
import Button from '../../../components/button/Button'

const Preregister = () => {
  return (
    <Frame classname='-2'
        leftchildren = {
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
        rightchildren = {
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
                <InputField
                type='text'
                placeholder='Tell us about your role in the community and how you envision utilizing our app.'
                className='frame-2-big-field'
                ></InputField>
                <Button type='button' value='Pre-register now!' className='frame-2-button'>
                Pre-register now!
                </Button>
            </form>
            </>
    }
    />
         
  )
}

export default Preregister