import React, { Component } from 'react';
import './InputPanel.css';
import $ from 'jquery';

export default class InputPanel extends Component {
  componentDidMount() {
    $('#inputPanel').keypress((e) => {
      if(e.which === 13) {
        e.preventDefault();
        return this.props.sendMessage();
      }
    });
  }

  render() {
    return(
      <div className="InputPanel" id="inputPanel">
        <textarea className="pt-input pt-fill" id="messageInput" type="text" dir="auto" ref="input" onChange={this.props._onChange}
          placeholder="Enter your message..." value={this.props._val} />
      </div>
    );
  }
}
