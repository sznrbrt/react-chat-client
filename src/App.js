import React, { Component } from 'react';
import './App.css';
//import io from 'socket.io-client';
import MainContainer from './containers/MainContainer/MainContainer'
import NavBarContainer from './containers/NavBarContainer/NavBarContainer'

//var socket = io.connect('http://localhost:1515/');

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;
