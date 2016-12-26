import React, { Component } from 'react';
import { EditableText } from '@blueprintjs/core';
import './NavBarLoggedIn.css'
import UserActions from '../../../actions/UserActions';

export default class NavBarLoggedIn extends Component {
  constructor(props) {
    super(props)

    this.onLogOutBtnClicked = this.onLogOutBtnClicked.bind(this);
  }

  onLogOutBtnClicked() {
    UserActions.logout();
  }

  render() {
    return(
      <nav className="pt-navbar pt-dark pt-fixed-top">
        <div className="pt-navbar-group pt-align-left">
        </div>
        <div className="pt-navbar-group pt-align-right">
          <button className="pt-button pt-minimal pt-icon-user">{this.props.user ? this.props.user.username : null }</button>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
          <span className="pt-navbar-divider"></span>
          <button onClick={this.onLogOutBtnClicked} className="pt-button pt-minimal pt-icon-log-out">Log Out</button>
        </div>
      </nav>
    );
  }
}
