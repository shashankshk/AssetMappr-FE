import React, { Dispatch, FC, FormEvent, Ref, RefObject, SetStateAction } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import Button from '../../../components/button/Button'
import InputField from '../../../components/input/inputfield/InputField'
import ErrorMsg from '../../../components/content/ErrorMsg'
// import { useSignup } from './'
import Header from '../../../components/title/header/Header'

type ParentProps = {
  baseProps: any
}

const Step1: FC<ParentProps> = ({ baseProps }) => {
  const navigate = useNavigate()
  //   const { handleSubmission } = useSignup()
  const next = (e: any) => {
    if (isMobileView) {
      handleSubmission(e)
      navigate('/signup/welcome')
    } else {
      navigate('/signup/password')
    }
  }
  const {
    user,
    setUser,
    designation,
    setDesignation,
    userRef,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    isMobileView,
    password,
    setPassword,
    validMatch,
    setReenteredPassword,
    handleSubmission,
  } = baseProps

  return (
    <>
      <Header classname='signup_header' content='Asset Mappr' />
      <Header classname='subheader' content='Sign Up' />
      <form onSubmit={next}>
        <div className='input_container'>
          <InputField
            type='text'
            id='username'
            className='name-required-field'
            placeholder='Your Name'
            autocomplete='off'
            onchange={(e) => setUser(e.target.value)}
            required={true}
            value={user}
          />
          <InputField
            type='text'
            id='designation'
            className='required-field'
            placeholder='Designation'
            autocomplete='off'
            onchange={(e) => setDesignation(e.target.value)}
            required={true}
            value={designation}
          />
          <InputField
            type='tel'
            id='phone'
            className='required-field'
            placeholder='Phone Number'
            autocomplete='off'
            onchange={(e) => setPhoneNumber(e.target.value)}
            required={true}
            value={phoneNumber}
          />
          <InputField
            type='text'
            id='email'
            className='required-field'
            placeholder='Email'
            autocomplete='off'
            onchange={(e) => setEmail(e.target.value)}
            required={true}
            value={email}
          />
          {isMobileView && (
            <>
              <InputField
                type='password'
                id='password'
                className='required_field'
                placeholder='Create Password'
                autocomplete='off'
                onchange={(e) => setPassword(e.target.value)}
                required={true}
                value={password}
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
              ></ErrorMsg>
            </>
          )}
        </div>
        <Button type='submit' value={isMobileView ? 'Sign Up' : 'Next'} className='signup2_button'>
          {isMobileView ? 'Sign Up' : 'Next'}
        </Button>
      </form>
    </>
  )
}

export default Step1
