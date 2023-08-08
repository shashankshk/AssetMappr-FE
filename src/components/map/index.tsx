import React, { useMemo } from 'react'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
    mapIds: [process.env.BASE_MAP_ID ?? ''],
  })

  const center = useMemo(() => ({ lat: 40.445471, lng: -79.949411 }), [])
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
          <MarkerF
            position={center}
            icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
          />
        </GoogleMap>
      )}
    </div>
  )
}

export default Map
