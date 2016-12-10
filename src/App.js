import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import MainContainer from './containers/MainContainer/MainContainer'
import NavBarContainer from './containers/NavBarContainer/NavBarContainer'

var socket = io.connect('http://localhost:1515/');

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: 'Anonymus' };
    this.changeName = this.changeName.bind(this);
  }

  componentDidMount() {
    socket.on('usercount', (val) => {
      console.log('userCount');
      this.setState({ userCount: val})
    })
  }

  changeName(val) {
    this.setState({ name: val });
  }

  render() {
    console.log('C', this.state.userCount);
    return (
      <div className="App">
        <NavBarContainer name={this.state.name} onChangeName={this.changeName} count={this.state.userCount} />
        <MainContainer name={this.state.name} />
      </div>
    );
  }
}

export default App;
