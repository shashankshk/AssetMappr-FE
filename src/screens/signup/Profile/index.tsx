import Card from '../../../components/card/Card'
import { useState, useEffect } from 'react'
import backgroundImage from '../../assets/images/background_image.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/title/header/Header'
import InputLabel from '../../../components/input/inputlabel/InputLabel'
import InputField from '../../../components/input/inputfield/InputField'
import SelectOption from '../../../components/select/SelectOption'
import Button from '../../../components/button/Button'
import { useSignup } from '../SignUpContext'
import axios from 'axios'
import { BASE_URL } from '../../../utils/constants'
// component which asks the user for their profile information
// TODO: For mobile view, modify the positions of the header and the button
const ProfileInfoScreen = () => {
  const navigate = useNavigate()
  const { data } = useSignup()
  useEffect(() => {
    if (!data.userId) {
      navigate('/signup')
    }
  }, [navigate])
  const ethnicityOptions = [
    { label: 'Hispanic', value: 'Hispanic' },
    { label: 'Non-Hispanic', value: 'Non-Hispanic' },
  ]

  const raceOptions = [
    { label: 'White', value: 'White' },
    { label: 'Black or African American', value: 'Black or African American' },
    { label: 'American Indian or Alaska Native', value: 'American Indian or Alaska Native' },
    { label: 'Asian', value: 'Asian' },
    {
      label: 'Native Hawaiian or Other Pacific Islander',
      value: 'Native Hawaiian or Other Pacific Islander',
    },
    { label: 'I self identify as another race', value: 'self_identify' },
    { label: 'I wish not to self-identify', value: 'not_to_identify' },
  ]

  const selectedSexOptions = [
    { label: 'Female', value: 'Female' },
    { label: 'Male', value: 'Male' },
    { label: 'Other, which?', value: 'Other' },
    { label: 'I wish not to self-identify', value: 'not_to_identify' },
  ]

  const handleProfileSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const profileData = {
        userId: data.userId,
        sex,
        race,
        ethnicity,
        dob,
      }
      const response = await axios.post(`${BASE_URL}/user/updateProfile`, profileData)
      if (response.status == 201) {
        const userId = response.data.userId
        navigate('/login')
      }
    } catch (err: any) {
      // if we didn't hear back from the server at all
      // if (!err.response) {
      //   setErrMsg('Server down. Please try again later.')
      // } else if (err.response?.status === 409) {
      //   setErrMsg('User already created. Please sign in.')
      // } else {
      //   setErrMsg('Registration failed')
      // }
    }
    navigate('/home')
  }

  const [race, setRace] = useState('')
  const [sex, setSex] = useState('')
  const [dob, setDob] = useState('')
  const [ethnicity, setEthnicity] = useState('')

  return (
    <>
      <Header classname='big_header' content='Profile Information' />
      <form onSubmit={handleProfileSubmit}>
        <div className='profile_container'>
          <InputLabel
            htmlfor='date_of_birth'
            classname='required_dob'
            content='1. What is your date of birth?'
          />
          <InputField
            type='date'
            id='date_of_birth'
            className='profile_dateofbirth'
            placeholder='MM/DD/YYYY'
            autocomplete='off'
            required={true}
            onchange={(e) => setDob(e.target.value)}
          />

          <InputLabel htmlfor='ethnicity' content='2. What is your ethnicity? (Optional)' />
          <SelectOption
            classname='select_ethnicity'
            id='ethnicity'
            name='ethnicity'
            initialValue=''
            onchange={(e) => setEthnicity(e.target.value)}
            initialLabel='Select your response'
            options={ethnicityOptions}
          ></SelectOption>

          <InputLabel htmlfor='race' content='3. What is your race? (Optional)' />
          <SelectOption
            classname='select_race'
            id='race'
            name='race'
            onchange={(e) => setRace(e.target.value)}
            initialValue=''
            initialLabel='Select your response'
            options={raceOptions}
          ></SelectOption>

          {race === 'self_identify' && (
            <InputField
              type='text'
              className='self_race'
              placeholder='Please tell us what you identify as (optional)'
              onchange={(e) => setRace(e.target.value)}
            />
          )}

          <InputLabel htmlfor='sex' content='4. What is your sex? (Optional)' />
          <SelectOption
            classname='select_sex'
            id='sex'
            name='sex'
            onchange={(e) => setSex(e.target.value)}
            initialValue=''
            initialLabel='Select your response'
            options={selectedSexOptions}
          />

          {sex === 'Other' && (
            <InputField
              type='text'
              className='self_sex'
              placeholder='Please tell us which (optional)'
              onchange={(e) => setSex(e.target.value)}
            />
          )}
        </div>
        <Button type='submit' value='Finish' className='profile_continue_button'>
          Finish
        </Button>
      </form>
    </>
  )
}

export default ProfileInfoScreen
