import React, { Component } from 'react';
import './MessageContainer.css';
import Message from '../../components/MessageContainer/Message/Message.js';
import socket from '../../Socket';

export default class MessageContainer extends Component {
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
