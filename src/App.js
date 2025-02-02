import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';
import ConversationPanelContainer from './containers/ConversationPanelContainer/ConversationPanelContainer';
import AuthActions from './actions/AuthActions';
import AuthStore from './stores/AuthStore';
import { browserHistory } from 'react-router'
//import UserStore from './stores/UserStore';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: 'Anonymus', userLoggedIn: false };
    this.changeName = this.changeName.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AuthActions.getAuthStatusFromLocalStorage((_user) => {
      this.setState({ userLoggedIn: !!_user, user: _user });
    });
  }

  componentDidMount() {
    AuthStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    AuthStore.stopListening(this._onChange);
  }

  changeName(val) {
    this.setState({ name: val });
  }

  _onChange() {
    AuthActions.getAuthStatusFromLocalStorage((_user) => {
      this.setState({ userLoggedIn: AuthStore.getAuthStatus(), user: _user });
      if(this.state.userLoggedIn) {
        browserHistory.push('/main');
      }
    });
  }

  render() {
    if(this.state.userLoggedIn) {
      return (
        <div className="App">
          <NavBarContainer isLoggedIn={this.state.userLoggedIn}
            user={this.state.user} count={'Unknown'} />
          <div className="Container">
            <ConversationPanelContainer />
            
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavBarContainer isLoggedIn={this.state.userLoggedIn}
            user={this.state.user} count={'Unknown'} />
          {this.props.children}
        </div>
      );
    }
  }
}

export default App;
