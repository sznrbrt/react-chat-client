import React, { Component } from 'react';
import NavBarLoggedIn from '../../components/NavBarContainer/NavBarLoggedIn/NavBarLoggedIn';
import NavBarLoggedOut from '../../components/NavBarContainer/NavBarLoggedOut/NavBarLoggedOut';
import UserActions from '../../actions/UserActions';
import { browserHistory } from 'react-router'


export default class NavBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { email: undefined, password: undefined, isLoading: false }
    this.onLogInBtnClicked = this.onLogInBtnClicked.bind(this);
    this.onLogOutBtnClicked = this.onLogOutBtnClicked.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onLogInBtnClicked() {
    let data = this.state;
    this.setState({ isLoading: true});
    UserActions.login(data, (finished) => {
      if(finished) {
        this.setState({ isLoading: false, email: undefined, password: undefined});
        browserHistory.push('/main');
      }
    });
  }

  onLogOutBtnClicked() {
    UserActions.logout();
    browserHistory.replace('/');
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if(this.props.isLoggedIn) {
      return(
        <NavBarLoggedIn {...this.props} {...this.state}
          onLogOutBtnClicked={this.onLogOutBtnClicked} />
      );
    } else {
      return (
        <NavBarLoggedOut {...this.props} {...this.state}
          onChangeEmail={this.onChangeEmail} onChangePassword={this.onChangePassword}
          onLogInBtnClicked={this.onLogInBtnClicked} />
      );
    }
  }
}
