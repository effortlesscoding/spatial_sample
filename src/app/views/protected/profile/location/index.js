import React, { PureComponent, } from 'react'
import { ControlLabel, } from 'react-bootstrap'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete'
import { GoogleMap, Marker } from "react-google-maps";
import { LocationMap, } from './locationmap'
import _ from 'lodash'


class Location extends PureComponent {

  constructor(props) {
    super(props)
    this._geocode = _.debounce(this._handleGeocodeAddress, 500)
    this.state = {
      markers: props.locationGeometry ? [props.locationGeometry] : []
    }
  }

  _handleGeocodeAddress = (location) => {
    geocodeByAddress(location)
      .then(results => {
        const result = _.first(results)
        const newGeometry = {
          lat: result.geometry.location.lat(),
          lng: result.geometry.location.lng(),
        }
        console.log('newGeometry', newGeometry)
        this._mapComponent.panTo(this.state.newGeometry)
        this.props.onLocationGeometryChanged(newGeometry)
      })
      .catch(error => console.error(error))
  }

  _handleLocationChange = (location) => {
    this.props.onLocationAddressChanged(location)
    this._geocode(location)
  }

  _handleMapClick = () => {
    console.log('_handleMapClick')
  }

  _handleMapLoad = (map) => {
    this._mapComponent = map
  }

  render() {
    const markers = this.props.locationGeometry ? [this.props.locationGeometry] : []
    return (
      <section>
        <ControlLabel>Your Location</ControlLabel>
        <PlacesAutocomplete
          inputProps={{
            value: this.props.locationAddress,
            onChange: this._handleLocationChange,
          }}
        />
        <LocationMap
          center={this.props.locationGeometry}
          containerElement={
            <div style={{ zIndex: -1, height: `500px`, width: '100%', }} />
          }
          mapElement={
            <div style={{ zIndex: -1, height: `500px`, width: '100%', }} />
          }
          onMapLoad={this._handleMapLoad}
          onMapClick={_.noop}
          markers={markers}
          onMarkerRightClick={_.noop}
        />
      </section>
    )
  }
}

export {
  Location,
}
