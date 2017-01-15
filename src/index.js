import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Home';

import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';


const routes = (
  <Route path="/personal-portfolio-17" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/personal-portfolio-17/example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="/personal-portfolio-17/two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />

    </Route>

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
