import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';

import MessageInteraction from './containers/message-interaction';

// Need to add the /personal-portfolio-17/ to have it ready for production
// This will not be an issue cause still deving dingus

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute />

    <Route path="/msg" mapMenuTitle="Example" component={MessageInteraction} />
      {/*<Route path="/two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>*/}

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
