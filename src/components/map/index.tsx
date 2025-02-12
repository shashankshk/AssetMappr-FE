import React, { useEffect, useMemo, useState } from 'react'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import axios from 'axios'
const Map = () => {
  const [mapData, setMapData] = useState<any>([{ latitude: 40.1955304, longitude: -79.9222298 }])
  const commId = 4250408
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
    mapIds: [process.env.BASE_MAP_ID ?? ''],
  })

  const loadData = async () => {
    const data = await axios('http://18.221.77.117/api/assets/get_assets')
    setMapData(data.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const center = useMemo(() => ({ lat: 40.1955304, lng: -79.9222298 }), [])
  return (
    <div className='google-map'>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName='google-map-container'
          center={center}
          zoom={15}
          options={{ mapId: process.env.BASE_MAP_ID }}
        >
          {mapData.map((dataPoint: any, index: number) => {
            return (
              <MarkerF
                key={index}
                position={{
                  lat: parseFloat(dataPoint.latitude),
                  lng: parseFloat(dataPoint.longitude),
                }}
                icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
              />
            )
          })}
        </GoogleMap>
      )}
    </div>
  )
}

export default Map
