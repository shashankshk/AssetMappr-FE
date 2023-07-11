import Card from '../../../components/card/Card'
import { useState, useEffect } from 'react'
import backgroundImage from '../../assets/images/background_image.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/title/header/Header'
import InputLabel from '../../../components/input/inputlabel/InputLabel'
import InputField from '../../../components/input/inputfield/InputField'
import SelectOption from '../../../components/select/SelectOption'
import Button from '../../../components/button/Button'
// component which asks the user for their profile information
// TODO: For mobile view, modify the positions of the header and the button
const ProfileInfoScreen = () => {
  const navigate = useNavigate()

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

  const handleProfileSubmit = async () => {
    navigate('/home')
  }

  const [selectedRace, setSelectedRace] = useState('')
  const [selectedSex, setSelectedSex] = useState('')

  return (
    <>
      <Header classname='header' content='Profile Information' />
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
          />

          <InputLabel htmlfor='ethnicity' content='2. What is your ethnicity? (Optional)' />
          <SelectOption
            classname='select_ethnicity'
            id='ethnicity'
            name='ethnicity'
            initialValue=''
            initialLabel='Select your response'
            options={ethnicityOptions}
          ></SelectOption>

          <InputLabel htmlfor='race' content='3. What is your race? (Optional)' />
          <SelectOption
            classname='select_race'
            id='race'
            name='race'
            onchange={(e) => setSelectedRace(e.target.value)}
            initialValue=''
            initialLabel='Select your response'
            options={raceOptions}
          ></SelectOption>

          {selectedRace === 'self_identify' && (
            <InputField
              type='text'
              className='self_race'
              placeholder='Please tell us what you identify as (optional)'
            />
          )}

          <InputLabel htmlfor='sex' content='4. What is your sex? (Optional)' />
          <SelectOption
            classname='select_sex'
            id='sex'
            name='sex'
            onchange={(e) => setSelectedSex(e.target.value)}
            initialValue=''
            initialLabel='Select your response'
            options={selectedSexOptions}
          />

          {selectedSex === 'Other' && (
            <InputField
              type='text'
              className='self_sex'
              placeholder='Please tell us which (optional)'
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

/*

<select className="select_race" id="race" name="race" onChange={(e) => setSelectedRace(e.target.value)}>
                        <option style={{display:'none'}} value="" selected>Select your response</option>
                        <option value="White">White</option>
                        <option value="Black or African American">Black or African American</option>
                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                        <option value="Asian">Asian</option>
                        <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                        <option value="self_identify">I self identify as another race</option>
                        <option value="not_to_identify">I wish not to self-identify</option>
                    </select>
*/
