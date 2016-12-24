import React, { Component } from 'react';
import './App.css';
import socket from './Socket';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: 'Anonymus' };
    this.changeName = this.changeName.bind(this);
  }

  componentDidMount() {
    socket.on('usercount', (val) => {
      this.setState({ userCount: val})
    })
  }

  changeName(val) {
    this.setState({ name: val });
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer name={this.state.name} onChangeName={this.changeName} count={this.state.userCount} />

        {this.props.children}
      </div>
    );
  }
}

export default App;
