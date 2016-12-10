import React, { Component } from 'react';
import { EditableText } from '@blueprintjs/core';
import './NavBarContainer.css'

export default class NavBarContainer extends Component {
  render() {
    return(
      <nav className="pt-navbar pt-dark">
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
