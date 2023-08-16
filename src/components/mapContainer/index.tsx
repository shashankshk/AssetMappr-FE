import React from 'react'
import Map from '../map'
import SelectOption from '../select/SelectOption'
import Button from '../button/Button'

const MapContainer = () => {
  return (
    <div className='map-container'>
      <div className='map-container-topnav'>
        <div className='map-container-options'>
        <SelectOption
          options={[{ label: 'Select category', value: '' }]}
          initialLabel='Filter Assets by Category'
          initialValue=''
          name='Filter category'
          classname='sel-category-option'
        />
        <Button value='Add Comment' type='submit' size='medium' className='add-comment-button'>
          Add Comment
        </Button>
      </div>
      </div>
      <Map />
    </div>
  )
}

export default MapContainer
