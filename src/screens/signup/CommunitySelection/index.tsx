import { useState, useEffect, FC, Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import SelectOption from '../../../components/select/SelectOption'
import Header from '../../../components/title/header/Header'
import Subheader from '../../../components/title/subheader/Subheader'
import { COMMUNITIES } from '../../../utils/constants'
import { useSignup } from '../SignUpContext'
// import { useSignup } from '../'

type ParentProps = {
  dataKey: string
}
// The first welcome component which prompts user to enter name of community.
const CommunitySelection: FC<ParentProps> = ({ dataKey }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()
  const { data, addData, resetData } = useSignup()
  // const { setSelectedCommunity } = useSignup()
  // useEffect(() => {
  //   if (!data[dataKey]) {
  //     resetData()
  //     navigate('/signup')
  //   }
  // }, [data, navigate, resetData])
  const onClick = async () => {
    addData(dataKey, { comGeoId: +selectedOption })
    navigate('/signup/basicinfo')
  }

  return (
    <>
      <Header classname='welcome_title' content='Welcome to Asset Mappr!' size='large' />
      <Subheader classname='subtitle' content='Select your community to get started' size='small' />
      <form>
        <div className='select_community'>
          <SelectOption
            size='large'
            name='community'
            id='community'
            onchange={(e) => {
              setSelectedOption(e.target.value)
              // setSelectedCommunity(e.target.value)
            }}
            initialValue=''
            initialLabel='Select one'
            options={COMMUNITIES}
          ></SelectOption>
        </div>
        <Button
          type='submit'
          value='Continue'
          className={`${selectedOption ? '' : 'disabled'}`}
          onClick={onClick}
          disabled={!selectedOption}
          flexible
          size='large'
        >
          Continue
        </Button>
      </form>
    </>
  )
}

export default CommunitySelection
