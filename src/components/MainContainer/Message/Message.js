import React, { Component } from 'react';
import './Message.css'

export default class Message extends Component {
  constructor(props){
    super(props)

  }

  render() {
    console.log('PROPS',this.props);
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
