import React, { Component } from 'react';
//import { Col, Row } from 'react-bootstrap';
import './MainContainer.css';
import InputPanel from '../../components/MainContainer/InputPanel/InputPanel';
import MessagesPanel from '../../components/MainContainer/MessagesPanel/MessagesPanel';

export default class MainContainer extends Component {
  render() {

    return(
      <div className="MainContainer">
        <MessagesPanel />
        <InputPanel />
      </div>
    );
  }
}
