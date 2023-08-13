import React from 'react'
import IconList from '../../components/list/IconList'
import { faMap} from '@fortawesome/free-solid-svg-icons'
import navleftimg from '../../assets/images/nav_left_map.svg'
import Image from '../../components/image/Image'

const DashboardLeftNav = () => {
  return (
    <div className='home-left-nav'>
      <div className='left-nav-top'>
        <h1 className='app-title'>Asset Mappr</h1>
        <h2 className='app-subtitle'>Monongahela</h2>
      </div>
      <div className='nav-line'></div>
      <div className='left-nav-items'>
        <div className='left-nav-ind-item'>
          <a href='' className='nav-link left-nav-ind-item'>
            <Image classname='left-nav-image' imgname={navleftimg}/>
            <h2 className='left-nav-header'>Asset Map</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DashboardLeftNav
