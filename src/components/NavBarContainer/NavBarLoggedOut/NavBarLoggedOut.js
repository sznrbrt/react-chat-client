import React, { Component } from 'react';
import './NavBarLoggedOut.css';
import UserActions from '../../../actions/UserActions';

export default class NavBarLoggedOut extends Component {
  constructor(props) {
    super(props)

    this.state = { email: undefined, password: undefined }
    this.onLogInBtnClicked = this.onLogInBtnClicked.bind(this);
  }

  onLogInBtnClicked() {
    let data = this.state;
    UserActions.login(data);
  }

  render() {
    return(
      <nav className="pt-navbar pt-dark pt-fixed-top">
        <div className="pt-navbar-group pt-align-left">
        </div>
        <div className="pt-navbar-group pt-align-right">
        <label className="pt-label pt-inline inputLabel">
          Email:
          <input onChange={(e) => this.setState({ email: e.target.value })} className="pt-input inputBox" placeholder="Email" type="text" id="emailInputNavBar" />
        </label>
        <label className="pt-label pt-inline inputLabel">
          Password:
          <input onChange={(e) => this.setState({ password: e.target.value })} className="pt-input inputBox" placeholder="Password" type="password" />
        </label>
        <button onClick={this.onLogInBtnClicked} className="pt-button pt-minimal pt-icon-log-in">Log In</button>
        </div>
      </nav>
    );
  }
}
