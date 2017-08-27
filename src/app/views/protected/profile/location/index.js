import React, { PureComponent, } from 'react'
import { ControlLabel, } from 'react-bootstrap'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete'
import { GoogleMap, Marker } from "react-google-maps";
import { LocationMap, } from './locationmap'
import _ from 'lodash'

class Location extends PureComponent {
  state = {
    location: '',
    center: { lat: -25.363882, lng: 131.044922 },
    markers: []
  }

  constructor(props) {
    super(props)
    this._geocode = _.debounce(this._handleGeocodeAddress, 500)
  }

  _handleGeocodeAddress = () => {
    const address = this.state.location
    geocodeByAddress(this.state.location)
      .then(results => {
        const result = _.first(results)
        this.setState({
          center: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          },
          markers: [
            {
              position: {
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
              },
            }
          ],
        })
        this._mapComponent.panTo(this.state.center)
      })
      .catch(error => console.error(error))
  }

  _handleLocationChange = (location) => {
    console.log('location', location)
    this.setState({ location, })
    this._geocode()
  }

  _handleMapClick = () => {
    console.log('_handleMapClick')
  }

  _handleMapLoad = (map) => {
    this._mapComponent = map
  }

  render() {
    console.log('new this.state.center', this.state.center)
    return (
      <section>
        <ControlLabel>Your Location</ControlLabel>
        <PlacesAutocomplete
          inputProps={{
            value: this.state.location,
            onChange: this._handleLocationChange,
          }}
        />
        <LocationMap
          center={this.state.center}
          containerElement={
            <div style={{ zIndex: -1, height: `500px`, width: '100%', }} />
          }
          mapElement={
            <div style={{ zIndex: -1, height: `500px`, width: '100%', }} />
          }
          onMapLoad={this._handleMapLoad}
          onMapClick={_.noop}
          markers={this.state.markers}
          onMarkerRightClick={_.noop}
        />
      </section>
    )
  }
}

export {
  Location,
}
