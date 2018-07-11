import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import Home from './containers/home';
import MessageInteraction from './containers/message-interaction';
import CoffeeShops from './containers/coffee-shops';
import CobbCaseStudy from './containers/cobb-case-study';
import MoseyCaseStudy from './containers/mosey-case-study';

// Need to add the /snips/ to have it ready for production
// This will not be an issue cause still deving dingus

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/snips/msg" mapMenuTitle="Example" component={MessageInteraction} />
    <Route path="/snips/cobb" mapMenuTitle="Example" component={CobbCaseStudy} />
    <Route path="/snips/mosey" mapMenuTitle="Example" component={MoseyCaseStudy} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
