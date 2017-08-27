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

  state = {
    email: '',
    name: '',
    startDate: moment(),
  };

  constructor(props) {
    super(props)

  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, })
  }

  handleBirthdayChange = (newDate) => {
    this.setState({ startDate: newDate, })
  }

  render() {
    return (
      <section>
        <FormGroup>
          <ControlLabel>Your Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter your name"
            onChange={this.handleNameChange}
          />
          <ControlLabel>Your Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Enter your email"
            onChange={this.handleEmailChange}
          />
          <ControlLabel>Your Day of Birth</ControlLabel>
          <DatePicker
            selected={this.state.startDate}
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
