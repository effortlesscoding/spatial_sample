import React, { PureComponent, } from 'react'
import { ControlLabel, } from 'react-bootstrap'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete'
import { GoogleMap, Marker } from "react-google-maps";
import { LocationMap, } from './locationmap'
import _ from 'lodash'

class Location extends PureComponent {
  state = {
    location: '',
  }

  _handleLocationChage = (location) => {
    this.setState({ location, })
  }

  _handleMapClick = () => {
    console.log('_handleMapClick')
  }

  render() {
    return (
      <section>
        <ControlLabel>Your Location</ControlLabel>
        <PlacesAutocomplete
          inputProps={{
            value: this.state.location,
            onChange: this._handleLocationChage,
          }}
        />
        <LocationMap
          containerElement={
            <div style={{ zIndex: -1, height: `500px`, width: '100%', }} />
          }
          mapElement={
            <div style={{ zIndex: -1, height: `500px`, width: '100%', }} />
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          markers={[]}
          onMarkerRightClick={_.noop}
        />
      </section>
    )
  }
}

export {
  Location,
}
