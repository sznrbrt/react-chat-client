import React, { Component } from 'react';
import './InputPanel.css';


export default class InputPanel extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className="InputPanel">
        <textarea className="pt-input pt-fill" id="messageInput" type="text" placeholder="Enter your message..." dir="auto" />
      </div>
    );
  }
}
