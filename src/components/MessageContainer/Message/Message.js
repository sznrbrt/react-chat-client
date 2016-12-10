import React, { Component } from 'react';
import './Message.css'

export default class Message extends Component {
  render() {
    return(
      <div>
        <div className="Message">
          <div className="messageFrom">
            <span className="messageFromText">{this.props.from || 'Anonymus'}:</span>
          </div>
          <div className="messageContent">
            <span>{this.props.content}</span>
          </div>
        </div>
        <hr className="hrMsgBottom" />
      </div>
    );
  }
}
