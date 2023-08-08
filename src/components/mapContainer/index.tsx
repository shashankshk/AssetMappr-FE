import React from 'react'
import Map from '../map'
import SelectOption from '../select/SelectOption'
import Button from '../button/Button'

const MapContainer = () => {
  return (
    <div className='map-container'>
      <div className='map-container-topnav'>
        <SelectOption
          options={[{ label: 'Select category', value: '' }]}
          initialLabel='Select Category'
          initialValue=''
          name='Filter category'
        />
        <Button value='Add Comment' type='submit'>
          Add Comment
        </Button>
      </div>
      <Map />
    </div>
  )
}

export default MapContainer
