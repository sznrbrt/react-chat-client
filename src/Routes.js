import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './App'
import MainContainer from './containers/MainContainer/MainContainer';
import ConversationContainer from './containers/ConversationContainer/ConversationContainer';
import RegisterContainer from './containers/RegisterContainer/RegisterContainer';

export default class Routes extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RegisterContainer} />
          {/* make them children of `App` */}
          <Route path="/main" component={MainContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/conversation" component={ConversationContainer} />
        </Route>
      </Router>
    );
  }
}
