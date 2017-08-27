import React, { PureComponent, } from 'react'
import {
  FormGroup,
  FormControl,
} from 'react-bootstrap';

class Details extends PureComponent {

  state = {
    email: '',
    name: '',
  };

  constructor(props) {
    super(props)

  }

  handleNameChange = (e) => {
    console.log('name change', e)
  }

  handleEmailChange = (e) => {
    console.log('email change', e)
  }

  render() {
    return (
      <section>
        <FormGroup>
          <ControlLabel>Your Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter your name"
            onChange={this.handleNameChange}
          />
          <ControlLabel>Your Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter your email"
            onChange={this.handleEmailChange}
          />
        </FormGroup>
      </section>
    )
  }
}

export {
  Details,
}
