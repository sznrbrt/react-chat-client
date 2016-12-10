import React, { Component } from 'react';
import './MainContainer.css';
import InputPanel from '../../components/MainContainer/InputPanel/InputPanel';
import MessageContainer from '../MessageContainer/MessageContainer';
import socket from '../../Socket'

export default class MainContainer extends Component {
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
      <div className="MainContainer">
        <MessageContainer />
        <InputPanel _onChange={this.handleInputchage} sendMessage={this.sendMessage} _val={this.state.message} />
      </div>
    );
  }
}
