import { useState, useEffect, FC, Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import SelectOption from '../../../components/select/SelectOption'
import Header from '../../../components/title/header/Header'
import Subheader from '../../../components/title/subheader/Subheader'
// import { useSignup } from '../'

type ParentProps = {
  setSelectedCommunity: Dispatch<SetStateAction<string>>
}
// The first welcome component which prompts user to enter name of community.
const CommunitySelection: FC<ParentProps> = ({ setSelectedCommunity }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()
  // const { setSelectedCommunity } = useSignup()
  const options = [
    { label: 'Uniontown', value: 'uniontown' },
    { label: 'Test Community', value: 'testcommunity' },
    { label: 'Monongahela', value: 'monongahela' },
  ]

  const onClick = async () => {
    navigate('/signup/basicinfo')
  }

  return (
    <>
      <Header classname='welcome_title' content='Welcome to Asset Mappr!' />
      <Subheader classname='subtitle' content='Select your community to get started' />
      <form>
        <div className='select_community'>
          <SelectOption
            name='community'
            id='community'
            onchange={(e) => {
              setSelectedOption(e.target.value)
              setSelectedCommunity(e.target.value)
            }}
            initialValue=''
            initialLabel='Select one'
            options={options}
          ></SelectOption>
        </div>
        <Button
          type='submit'
          value='Continue'
          className={`welcome_continue_button ${selectedOption ? '' : 'disabled'}`}
          onClick={onClick}
          disabled={!selectedOption}
        >
          Continue
        </Button>
      </form>
    </>
  )
}

export default CommunitySelection
