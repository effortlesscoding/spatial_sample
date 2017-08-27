import React, { PureComponent, } from 'react'
import {
  ControlLabel,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Details extends PureComponent {

  constructor(props) {
    super(props)
  }

  handleFirstNameChange = (e) => {
    this.props.onFirstNameChanged(e.target.value)
  }

  handleLastNameChange = (e) => {
    this.props.onLastNameChanged(e.target.value)
  }

  handleEmailChange = (e) => {
    this.props.onEmailChanged(e.target.value)
  }

  handleBirthdayChange = (newDate) => {
    this.props.onDobDateChanged(newDate)
  }

  render() {
    return (
      <section>
        <FormGroup>
          <ControlLabel>Your First Name</ControlLabel>
          <FormControl
            type="text"
            value={this.props.firstName}
            placeholder="Enter your first name"
            onChange={this.handleFirstNameChange}
          />
          <ControlLabel>Your Last Name</ControlLabel>
          <FormControl
            type="text"
            value={this.props.lastName}
            placeholder="Enter your last name"
            onChange={this.handleLastNameChange}
          />
          <ControlLabel>Your Email</ControlLabel>
          <FormControl
            type="text"
            value={this.props.email}
            placeholder="Enter your email"
            onChange={this.handleEmailChange}
          />
          <ControlLabel>Your Day of Birth</ControlLabel>
          <DatePicker
            selected={this.props.dobDate}
            onChange={this.handleBirthdayChange}
          />
        </FormGroup>
      </section>
    )
  }
}

export {
  Details,
}
