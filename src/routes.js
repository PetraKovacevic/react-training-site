import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/app';
import Home from './pages/home';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);
