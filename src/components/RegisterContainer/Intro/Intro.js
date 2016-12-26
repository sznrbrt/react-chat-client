import React, { Component } from 'react';
import './Intro.css';

export default class Intro extends Component {
  render() {
    return(
      <div className="Intro">
        <h1>React chat app</h1>
        <h4>This is an awesome chat app</h4>
        <h4>It was built using React.js and Blueprint UI library.</h4>
        <h4>Made by <a href="//www.github.com/sznrbrt">@sznrbrt</a></h4>
      </div>
    );
  }
}
