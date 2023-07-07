import React, { FC, FormEvent } from 'react'
import Button from '../../../components/button/Button'
import InputField from '../../../components/input/inputfield/InputField'
import ErrorMsg from '../../../components/content/ErrorMsg'
import Header from '../../../components/title/header/Header'

type ParentProps = {
  baseProps: any
}
const Step2: FC<ParentProps> = ({ baseProps }) => {
  const { setPassword, validMatch, setReenteredPassword, handleSubmission } = baseProps
  console.log(validMatch)
  return (
    <>
      <Header classname='signup_header' content='Asset Mappr' />
      <Header classname='subheader' content='Sign Up' />
      <form onSubmit={handleSubmission}>
        <div className='input_container'>
          <InputField
            type='password'
            id='password'
            className='required_field'
            placeholder='Create Password'
            autocomplete='off'
            onchange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <InputField
            type='password'
            id='renter_password'
            className='required-field'
            placeholder='Re-enter Password'
            autocomplete='off'
            onchange={(e) => setReenteredPassword(e.target.value)}
            required={true}
          />
          <ErrorMsg
            id='confirmnote'
            className={!validMatch ? 'instructions' : 'offscreen'}
            label='Must match the first password input field.'
          />
        </div>
        <Button
          type='submit'
          value='Sign Up'
          className={`signup2_button ${validMatch ? '' : 'disabled'} `}
        >
          Sign Up
        </Button>
      </form>
    </>
  )
}

export default Step2
