import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import InputField from '../../../components/input/inputfield/InputField'
import ErrorMsg from '../../../components/content/ErrorMsg'
import Header from '../../../components/title/header/Header'
import { useSignup } from '../SignUpContext'
import apiservice from '../../../utils/api/apiservice'
import axios from 'axios'
import { BASE_URL } from '../../../utils/constants'

type ParentProps = {
  dataKey: string
  setErrMsg: Dispatch<SetStateAction<string>>
}

const Step1: FC<ParentProps> = ({ dataKey, setErrMsg }) => {
  const [user, setUser] = useState('')
  const [designation, setDesignation] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [reenteredPassword, setReenteredPassword] = useState('')
  const navigate = useNavigate()
  const { data, addData } = useSignup()
  // const { setSelectedCommunity } = useSignup()
  const checkFormValid = () => {
    if (!user) return false
    if (!password || password.length < 8) return false
    if (password && reenteredPassword && password !== reenteredPassword) return false
    return true
  }
  useEffect(() => {
    console.log(data[dataKey])
    if (!data[dataKey]) {
      navigate('/signup')
    }
  }, [navigate])

  const next = async (e: any) => {
    e.preventDefault()
    const signUpData = {
      ...data[dataKey],
      userName: user,
      designation,
      phoneNumber,
      email,
      password,
    }
    addData(dataKey, signUpData)
    try {
      const response = await axios.post(`${BASE_URL}/user/signup`, signUpData)
      if (response.status == 201) {
        const userId = response.data.userId
        addData('userId', { userId: userId | 1 })
        navigate('/signup/welcome')
      }
    } catch (err: any) {
      // if we didn't hear back from the server at all
      if (!err.response) {
        setErrMsg('Server down. Please try again later.')
      } else if (err.response?.status === 409) {
        setErrMsg('User already created. Please sign in.')
      } else {
        setErrMsg('Registration failed')
      }
    }
  }

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
              className={password && password !== reenteredPassword ? 'instructions' : 'offscreen'}
              label='Must match the first password input field.'
            ></ErrorMsg>
          </>
        </div>
        <Button type='submit' value={'Sign Up'} flexible size='large' disabled={!checkFormValid()}>
          {'Sign Up'}
        </Button>
      </form>
    </>
  )
}

export default Step1
