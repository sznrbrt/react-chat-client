import React, { Component } from 'react';
import './MessagesPanel.css';
import Message from '../Message/Message.js';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:1515/');

export default class MessagesPanel extends Component {
  constructor(props) {
    super(props)

    this.state = { messages: [] }
  }

  componentDidMount() {
    socket.on('chat message', (msg) => {
      let _messages = this.state.messages.concat(msg);
      this.setState({ messages: _messages });
    })
  }

  render() {
    let _messages = this.state.messages.map((m, i) => <Message key={i} {...m} />);

    if(_messages.length) {
      return(
        <div className="MessagesPanel">
          {_messages}
        </div>
      );
    } else {
      return(
        <div className="MessagesPanel MessagesPanelAligned">
          <div>
            <p>
              No message to display
            </p>
          </div>
        </div>
      );
    }
  }
}
