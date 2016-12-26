import React, { Component } from 'react';
import NavBarLoggedIn from '../../components/NavBarContainer/NavBarLoggedIn/NavBarLoggedIn';
import NavBarLoggedOut from '../../components/NavBarContainer/NavBarLoggedOut/NavBarLoggedOut';

export default class NavBarContainer extends Component {

  render() {
    if(this.props.isLoggedIn) {
      return(
        <NavBarLoggedIn {...this.props} />
      );
    } else {
      return (
        <NavBarLoggedOut {...this.props} />
      );
    }
  }
}
