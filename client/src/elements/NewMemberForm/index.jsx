import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger, FormGroup, ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';
import * as style from './style.css';
import * as selectors from '../../store/selectors'
import * as actionCreators from '../../store/actions';

// const initialState = { showModal: false,
//                        firstName: '',
//                        lastName: '',
//                        password: '',
//                        email: '',
//                        role: '',
//                        photo:'',
//                        firstNameValid:false,
//                        lastNameValid: false,
//                        passwordValid: false,
//                        emailValid: false,
//                        roleValid: false,
//                        submittable: false
//                       };

var firstValid, lastValid, roValid, passValid, emValid, sub;                      

class NewMemberForm extends Component {
  componentWillMount() {
    // this.props.requestReadNewMemberForm();
    // this.handleNewMemberClick = this.handleNewMemberClick.bind(this);
  }

  submit() {
    alert('toast data sent');
    // this.setState(initialState);
  }

  close() {
    // this.setState(initialState);
  }

  open() {
    // this.setState({ showModal: true });
  }

  // componentDidUpdate: function(prevProps, prevState){
  //   console.log(prevState.firstNameValid);
  //   console.log(firstValid);
  //   if(prevState.firstNameValid === firstValid) {
  //     alert("danger");
  //     firstValid = null;
  //     this.setState({firstNameValid: firstValid})
  //   }

  //   if (
  //     this.state.firstNameValid &&
  //     this.state.lastNameValid &&
  //     this.state.passwordValid &&
  //     this.state.emailValid &&
  //     this.state.roleValid
  //     ) {
  //     this.setState({submittable: true});
  //   }
  //   // else {this.setState({submittable: false})}; //infinite here
  // },

  lengthValidationHelper(required, length) {
    if (length > required) {
      return true;
    }
    else if (length > 0){
      return false;
   }
   return null;
  }

  validReturnHelper(valid) {
    if (valid != null && valid) {
      return 'success';
    }
    else if (valid != null && !valid){
      return 'error';
    }
  }

  validateFirstName() {
    // firstValid = this.lengthValidationHelper(1, this.state.firstName.length);
    // return this.validReturnHelper(firstValid);
  }

  validateLastName() {
    // lastValid = this.lengthValidationHelper(1, this.state.lastName.length);
    // return this.validReturnHelper(lastValid);
  }

  validateEmail() {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var emValid = re.test(this.state.email);
    // if(this.state.email != '') {
    //   return this.validReturnHelper(emValid);
    // }
  }

  validatePassword() {
    // passValid = this.lengthValidationHelper(5, this.state.password.length);
    // return this.validReturnHelper(passValid);
  }

  validateRole() {
    // roValid = this.lengthValidationHelper(3, this.state.role.length);
    // return this.validReturnHelper(roValid);
  }

  handleChange(e) {
    // this.setState({ [e.target.attributes.id.nodeValue]: e.target.value });
  }

  render() {
    const { newMemberForm } = this.props
    console.log("*********" + newMemberForm);
    // onChange={(event) => setNewMember('chad')}
    setNewMember('chad');
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <span onClick={this.open}>
          Add Member
        </span>

        <Modal show={"this.state.showModal"} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Grid>
                <Col xs={6} md={6}>
                  <FormGroup validationState={this.validateFirstName()}>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      id="firstName"
                      type="text"
                      value=""
                      placeholder="Enter first name"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    {true ? null : <HelpBlock>Must be greater than 1 letter.</HelpBlock>}
                  </FormGroup>

                  <FormGroup validationState={this.validateEmail()}>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      id="email"
                      type="text"
                      value="{this.state.email}"
                      placeholder="Enter email address"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>This is not a valid email.</HelpBlock>
                  </FormGroup>

                  <ControlLabel>Photo</ControlLabel>
                  <FormControl
                    id="photo"
                    type="text"
                    value="{this.state.photo}"
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>

                <Col xs={6} md={6}>

                  <FormGroup validationState={this.validateLastName()}>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      id="lastName"
                      type="text"
                      value="{this.state.lastName}"
                      placeholder="Enter last name"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Must be greater than 1 letter.</HelpBlock>
                  </FormGroup>

                  <FormGroup validationState={this.validatePassword()}>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      id="password"
                      type="text"
                      value="{this.state.password}"
                      placeholder="Enter password"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Must be at least 6 characters.</HelpBlock>
                  </FormGroup>

                  <FormGroup validationState={this.validateRole()}>
                    <ControlLabel>Role</ControlLabel>
                    <FormControl
                      id="role"
                      type="text"
                      value="{this.state.role}"
                      placeholder="Enter text"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Must be greater than 3 characters.</HelpBlock>
                  </FormGroup>
                </Col>
              </Grid>  
            </form>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />
          </Modal.Body>
          <Modal.Footer>
            {true ? <Button onClick={this.submit}>Submit</Button> : null}
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

// NewMemberForm.propTypes = {
//   requestReadNewMemberForm: PropTypes.func.isRequired,
//   readNewMemberFormRequest: PropTypes.object.isRequired,
// }

const mapStateToProps = (state) => ({
  // readNewMemberFormRequest: selectors.getRequest(state, 'readNewMemberForm'),
  newMemberForm: selectors.getNewMemberForm(state),
});

export default connect(mapStateToProps, actionCreators)(NewMemberForm);