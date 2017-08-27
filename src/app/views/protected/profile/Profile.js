// @flow weak
import React, { PureComponent, } from 'react'
import PropTypes from 'prop-types'
import AnimatedView from '../../../components/animatedView/AnimatedView';
import {
  FormGroup,
  FormControl,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Location, } from './location'
import { Details, } from './Details'

class Profile extends PureComponent {

  render() {
    return (
      <AnimatedView>
        <Row>
          <Col
            md={6}
            sm={12}
          >
            <Details
            />
          </Col>
          <Col
            md={6}
            sm={12}
          >
            <Location
            />
          </Col>
        </Row>
      </AnimatedView>
    )
  }
}

export {
  Profile,
}
