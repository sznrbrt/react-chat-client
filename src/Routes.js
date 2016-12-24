import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App'
import MainContainer from './containers/MainContainer/MainContainer';
import ConversationContainer from './containers/ConversationContainer/ConversationContainer';

export default class Routes extends Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MainContainer} />
          {/* make them children of `App` */}
          <Route path="/main" component={MainContainer}/>
          <Route path="/conversation" component={ConversationContainer}/>
        </Route>
      </Router>
    );
  }
}
