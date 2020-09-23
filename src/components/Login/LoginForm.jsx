import React, { PropTypes } from "react";
import classNames from "classnames";

import InputBox from "../InputBox.jsx";
import Validator from '../../utils/validator.js';
import "../../styles/login-page.scss";

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: "",
      password: "",
      isValidUserName: true,
      isValidPassword: true,
      errorDetails: false
    };
  }
  componentWillReceiveProps(nextProps) {}

  save(e) {
    e.preventDefault();
    if (this.validateForm() && !this.state.showForgetFields) {
      let payload = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.submitLoginForm(payload);
    } else if (
      this.state.username === "" ||
      (this.state.password === "" && !this.state.showForgetFields)
    ) {
      let payload = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.submitLoginForm(payload);
    } else {
      let payload = {
        username: this.state.username,
      };
      this.props.submitResetForm(payload);
    }
  }
  submitNewPasswordForm(e) {
    e.preventDefault();
    if (this.state.newPassword1 === this.state.newPassword2) {
      this.setState({ isPassNotMatched: false });
      let payload = {
        password: this.state.newPassword2,
        username: this.props.username,
        ticket: this.props.token,
      };
      this.props.submitNewPassword(payload);
    } else {
      this.setState({ isPassNotMatched: true });
    }
  }
  validateForm() {
    if (
      this.state.username !== "" &&
      this.state.password !== "" &&
      this.state.isValidUserName &&
      this.state.isValidPassword
    ) {
      return true;
    } else {
      return false;
    }
  }

  setUserName(e) {
  
this.setState({username:e.target.value})
  }
setPassword(e) {
  this.setState({password:e.target.value})
}




  render() {
    return (
      <div className="login-card" id="loginCard">
        <form className="login-form" onSubmit={() => {this.save()}}>
          
          <label htmlFor="username">Username</label>
          <div className="form-wrap">
            <InputBox
              type="text"
              name="username"
              id="username"
              className={classNames({ 'input-box-error': !this.state.isValidUserName })}
              placeholder="Enter Name"
              handleChange={(e) => {this.setUserName(e)}}
              value={this.state.username}
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="form-wrap">
            <InputBox
              type="password"
              name="password"
              id="password"
              className={classNames({ 'input-box-error': !this.state.isValidPassword })}
              placeholder="Enter Password"
              handleChange={(e) => {this.setPassword(e)}}
              value={this.state.password}
            />
          </div>
        </form>
      </div>
    );
  }
}

// LoginForm.propTypes = {
//   submitLoginForm: PropTypes.func.isRequired,
//   appState: PropTypes.object.isRequired
// };

export default LoginForm;
