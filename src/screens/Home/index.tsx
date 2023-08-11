// File which would contain the home screen after user logs in/enters profile information

import MapContainer from '../../components/mapContainer'
import DashboardLeftNav from '../../containers/DashboardNav'

const HomeScreen = () => {
  return (
    <div style={{ display: 'flex' }}>
      <DashboardLeftNav />
      <MapContainer />
    </div>
  )
}

export default HomeScreen
