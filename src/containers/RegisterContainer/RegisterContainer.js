import React, { Component } from 'react';
import './RegisterContainer.css';
import Intro from '../../components/RegisterContainer/Intro/Intro';
import RegisterForm from '../../components/RegisterContainer/RegisterForm/RegisterForm';
import UserActions from '../../actions/UserActions'

export default class RegisterContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { email: undefined, username: undefined, password: undefined, loading: false };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitBtnPress = this.onSubmitBtnPress.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value});
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value});
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value});
  }

  onSubmitBtnPress() {
    this.setState({ loading: true })
    UserActions.register(this.state, (finished) => {
      if(finished) {
        this.setState({ email: '', username: '', password: '', loading: false });
        console.log('You\'ve registered!');
      }
    });
  }

  render() {
    return(
      <div className="RegisterContainer">
        <Intro />
        <RegisterForm inputValues={this.state}
          onChangeEmail={this.onChangeEmail}
          onChangeUsername={this.onChangeUsername}
          onChangePassword={this.onChangePassword}
          onSubmitBtnPress={this.onSubmitBtnPress} />
      </div>
    );
  }
}
