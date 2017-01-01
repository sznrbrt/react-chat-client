import React, { Component } from 'react';
import './NavBarLoggedOut.css';

export default class NavBarLoggedOut extends Component {
  render() {
    let button = this.props.isLoading ? <button onClick={this.props.onLogInBtnClicked} className="pt-button pt-minimal pt-icon-log-in pt-active">Log In</button> :
      <button onClick={this.props.onLogInBtnClicked} className="pt-button pt-minimal pt-icon-log-in">Log In</button>;

    return(
      <nav className="pt-navbar pt-dark pt-fixed-top">
        <div className="pt-navbar-group pt-align-left">
        </div>
        <div className="pt-navbar-group pt-align-right">
        <label className="pt-label pt-inline inputLabel">
          Email:
          <input onChange={this.props.onChangeEmail} className="pt-input inputBox" placeholder="Email" type="text" id="emailInputNavBar" />
        </label>
        <label className="pt-label pt-inline inputLabel">
          Password:
          <input onChange={this.props.onChangePassword} className="pt-input inputBox" placeholder="Password" type="password" />
          {button}
        </label>
        </div>
      </nav>
    );
  }
}
