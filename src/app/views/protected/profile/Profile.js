// @flow weak
import React, { PureComponent, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { updateUserProfile, } from '../../../redux/modules/userAuth'
import AnimatedView from '../../../components/animatedView/AnimatedView';
import {
  FormGroup,
  FormControl,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import moment from 'moment';
import { Location, } from './location'
import { Details, } from './Details'
import _ from 'lodash'

const DEFAULT_LOCATION = { lat: -25.363882, lng: 131.044922 }

class ProfileComponent extends PureComponent {

  constructor(props) {
    super(props)
    this.state = { ...props, }
  }

  _handleSaveProfile = () => {
    const {
      firstName,
      lastName,
      locationAddress,
      locationGeometryLat,
      locationGeometryLng,
      isAdmin,
      id,
      email,
    } = this.state
    this.props.dispatchSaveProfile({
      firstName,
      lastName,
      locationAddress,
      locationGeometryLat,
      locationGeometryLng,
      isAdmin,
      id,
      email,
    })
  }

  _handleFirstNameChanged = (firstName) => {
    this.setState({ firstName, })
  }

  _handleLastNameChanged = (lastName) => {
    this.setState({ lastName, })
  }

  _handleEmailChanged = (email) => {
    this.setState({ email, })
  }

  _handleDobDateChanged = (dobDate) => {
    this.setState({ dobDate, })
  }

  _handleLocationAddressChanged = (locationAddress) => {
    this.setState({ locationAddress, })
  }

  _handleLocationGeometryChanged = (locationGeometry) => {
    this.setState({ locationGeometry, })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      locationAddress,
    } = this.state
    let dobDate = this.state.dobDate
    let locationGeometry = this.state.locationGeometry
    console.log('locationAddress', locationAddress)
    console.log('locationGeometry', locationGeometry)
    if (!dobDate) dobDate = moment()
    if (!locationGeometry) locationGeometry = DEFAULT_LOCATION
    return (
      <AnimatedView>
        <Row>
          <Col
            md={6}
            sm={12}
          >
            <Details
              firstName={firstName}
              lastName={lastName}
              email={email}
              dobDate={dobDate}
              onFirstNameChanged={this._handleFirstNameChanged}
              onLastNameChanged={this._handleLastNameChanged}
              onEmailChanged={this._handleEmailChanged}
              onDobDateChanged={this._handleDobDateChanged}
            />
          </Col>
          <Col
            md={6}
            sm={12}
          >
            <Location
              locationAddress={locationAddress}
              locationGeometry={locationGeometry}
              onLocationAddressChanged={this._handleLocationAddressChanged}
              onLocationGeometryChanged={this._handleLocationGeometryChanged}
            />
            <Button
              onClick={this._handleSaveProfile}
            >
              Save Profile
            </Button>
          </Col>
        </Row>
      </AnimatedView>
    )
  }
}

const mapStateToProps = (state, props) => {
  const user = _.get(state, 'userAuth.user', {})
  return {
    ...user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSaveProfile: (profile) => {
      console.log('Yes?', profile)
      dispatch(updateUserProfile(profile))
    }
  }
}

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export {
  Profile,
}
