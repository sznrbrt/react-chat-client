import React, { Component } from 'react';
import { EditableText } from '@blueprintjs/core';
import './NavBarLoggedIn.css'

export default class NavBarLoggedIn extends Component {
  render() {
    return(
      <nav className="pt-navbar pt-dark pt-fixed-top">
        <div className="pt-navbar-group pt-align-left">
          <span className="nicknameTitle">NICKNAME:</span>
          <EditableText defaultValue={this.props.name} onConfirm={this.props.onChangeName} />
        </div>
        <div className="pt-navbar-group pt-align-right">
          <span># Connected users: {this.props.count}</span>
          <span className="pt-navbar-divider"></span>
          <button className="pt-button pt-minimal pt-icon-user"></button>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
    );
  }
}
