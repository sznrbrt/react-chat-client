import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';
import AuthActions from './actions/AuthActions';
import AuthStore from './stores/AuthStore';
//import UserStore from './stores/UserStore';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: 'Anonymus', userLoggedIn: false };
    this.changeName = this.changeName.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AuthActions.getAuthStatus((loggedIn) => {
      this.setState({ userLoggedIn: loggedIn });
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
    this.setState({ userLoggedIn: AuthStore.getAuthStatus() });
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer isLoggedIn={this.state.userLoggedIn}
          name={this.state.name} count={'Unknown'} />

        {this.props.children}
      </div>
    );
  }
}

export default App;
