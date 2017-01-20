import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Home';

import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';

// Need to add the /personal-portfolio-17/ to have it ready for production
// This will not be an issue cause still deving dingus

const routes = (
  <Route path="/interactions" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    {/*<Route path="/example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="/two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
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
