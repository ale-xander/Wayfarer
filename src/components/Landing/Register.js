import React, { Component } from 'react'
//import ControlLabel from 'react-bootstrap/ControlLabel'
import {
  Button,
  Modal, 
  FormGroup,
  FormControl,
  Form,
  InputGroup
} from 'react-bootstrap'

class Register extends React.Component {
state = {
      show: false,
      value: ''
    }


  getValidationState = () => {
    const length = this.state.value.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }

  handleChange = (e)=> {
    this.setState({ value: e.target.value })
  }

  handleClose =()=> {
    this.setState({ show: false })
  }

   handleShow = ()=> {
    this.setState({ show: true })
  }

  render () {
    return (
      <div>
        <Button bsStyle='primary' bsSize='large' onClick={this.handleShow}>
          open modal!
        </Button>
        <p className="modal-labels">Working example with validation</p>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register For Wayfarer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form inline>
              <FormGroup
                controlId='formBasicText'
                validationState={this.getValidationState()}>
                
                <FormControl
                  type='text'
                  value={this.state.value}
                  placeholder='Username'
                  onChange={this.handleChange}
                />
                
              </FormGroup>
              {'. email '}
              <FormGroup
                controlId='formBasicText'
                validationState={this.getValidationState()}>
               
                        <FormControl
                        type='email'
                        value={this.state.value}
                        placeholder='email'
                        onChange={this.handleChange}
                        />
               
              </FormGroup>
              

        </Form>
           
            <hr />
          below the line
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
export default Register
