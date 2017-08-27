import React, { PureComponent, } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const LocationMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={props.center}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        key={index}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

export {
  LocationMap,
}
