import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';
import AuthActions from './actions/AuthActions';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: 'Anonymus', userLoggedIn: false };
    this.changeName = this.changeName.bind(this);
  }

  componentWillMount() {
    let status = AuthActions.getAuthStatus();
    this.setState({ userLoggedIn: status });
  }

  componentDidMount() {

  }

  changeName(val) {
    this.setState({ name: val });
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer name={this.state.name} onChangeName={this.changeName} count={'Unknown'} />

        {this.props.children}
      </div>
    );
  }
}

export default App;
