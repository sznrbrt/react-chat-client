import React, { Component } from 'react';
import './ConversationContainer.css';
import InputPanel from '../../components/ConversationContainer/InputPanel/InputPanel';
import MessageContainer from '../MessageContainer/MessageContainer';
import socket from '../../Socket'

export default class ConversationContainter extends Component {
  constructor(props) {
    super(props)

    this.state = { message: '' };
    this.handleInputchage = this.handleInputchage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputchage(e) {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }

  sendMessage() {
    socket.emit('chat message', { content: this.state.message, from: this.props.name, timestamp: new Date() });
    this.setState({ message: '' });
  }

  render() {
    return(
      <div className="ConversationContainter">
        <MessageContainer />
        <InputPanel _onChange={this.handleInputchage} sendMessage={this.sendMessage} _val={this.state.message} />
      </div>
    );
  }
}
