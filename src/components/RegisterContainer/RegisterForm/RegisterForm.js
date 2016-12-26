import React, { Component } from 'react';
import './RegisterForm.css';

export default class RegisterForm extends Component {
  render() {
    let submitButton = this.props.loading ?
                          <button onClick={this.props.onSubmitBtnPress} id="signUpBtn" type="button" className="pt-button pt-intent-success" disabled>Loading...</button> :
                          <button onClick={this.props.onSubmitBtnPress} id="signUpBtn" type="button" className="pt-button pt-intent-success">Sign Up</button>;

    return(
      <div className="Form">
        <h4 className="introText">{"Don't you have an account yet?"}</h4>
        <h1>Sign Up!</h1>
        <h4 className="introText">{"😂 It's free and always will be 😂"}</h4>
        <label className="pt-label">
          Email:
          <div className="pt-input-group registerInputItem">
            <span className="pt-icon pt-icon-envelope"></span>
            <input onChange={this.props.onChangeEmail} value={this.props.inputValues.email} type="text" className="pt-input" placeholder="Enter your email" />
          </div>
        </label>
        <label className="pt-label">
          Username:
          <div className="pt-input-group registerInputItem">
            <span className="pt-icon pt-icon-user"></span>
            <input onChange={this.props.onChangeUsername} value={this.props.inputValues.username} type="text" className="pt-input" placeholder="Choose a username" />
          </div>
        </label>
        <label className="pt-label">
          Password:
          <div className="pt-input-group registerInputItem">
            <span className="pt-icon pt-icon-lock"></span>
            <input onChange={this.props.onChangePassword}  value={this.props.inputValues.password} type="password" className="pt-input" placeholder="Choose a password" />
          </div>
        </label>

        { submitButton }
      </div>
    );
  }
}
