import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const SpaceMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 42.5695, lng: -83.250 }}
    defaultMapTypeId={ 'hybrid' }
  >
  <Marker
    position={{ lat: 42.5692, lng: -83.249 }}
    icon={'/parking.png'}
  />
  <Marker
    position={{ lat: 42.5713, lng: -83.25000 }}
    icon={'/parking.png'}
  />
  <Marker
    position={{ lat: 42.5678, lng: -83.2498 }}
    icon={'/bubble.png'}
  />
  </GoogleMap>
))

export default class extends React.Component {
  render () {
    return (
      <SpaceMap 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9rGlyxMVbWbBozxB4GCk2UifHOoJ8Akw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}