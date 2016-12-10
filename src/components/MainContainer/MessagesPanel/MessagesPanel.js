import React, { Component } from 'react';
import './MessagesPanel.css';
import Message from '../Message/Message.js';

export default class MessagesPanel extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let _messages = messages.map((m, i) => <Message key={i} {...m} />);

    if(_messages) {
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

const messages = [
  { from: 'Norbert', timestamp: '2016-12-10T15:28:21.044Z', content: 'What up?'},
  { from: 'Norbert', timestamp: '2016-12-10T15:28:21.044Z', content: 'What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?What up?'},
  { from: 'Norbert', timestamp: '2016-12-10T15:28:21.044Z', content: 'What up?'},
  { from: 'Norbert', timestamp: '2016-12-10T15:28:21.044Z', content: 'What up?'},
  { from: 'Norbert', timestamp: '2016-12-10T15:28:21.044Z', content: 'What up?'},
]
