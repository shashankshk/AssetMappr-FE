// File which would contain the home screen after user logs in/enters profile information

import LeftNavBar from '../../components/navigation/LeftNavBar'
import { NavItemProps } from '../../components/navigation/navItem/NavItem'
import {faMap} from '@fortawesome/free-regular-svg-icons'
import { faHouse, faClipboardList } from '@fortawesome/free-solid-svg-icons'

const handleHomeClick = () => {
    alert('Home button clicked')
    console.log('Home Clicked')
}

const homeItem: NavItemProps = {
  className: 'home_ni',
  icon: faHouse,
  label: 'Home',
  onClick: handleHomeClick
}
const assetMapItem: NavItemProps = {
  className: 'asset_map_ni',
  icon: faMap,
  label: 'Asset Map',
}
const liveSurveysItem: NavItemProps = {
  className: 'live_surveys_ni',
  icon: faClipboardList,
  label: 'Live Surveys',
}

const navItems: NavItemProps[] = [homeItem, assetMapItem, liveSurveysItem]

const HomeScreen = () => {
  return (
    <div style={{ display:'flex' }}>
      <LeftNavBar className='dashboard_nb' navItems={navItems} />
      <div style={{ width: '100%', background:'beige' }}></div>
    </div>
  )
}

export default HomeScreen
