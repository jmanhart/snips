import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import MessageInteraction from './containers/message-interaction';
import CardsInteraction from './containers/cards-interaction';

// Need to add the /personal-portfolio-17/ to have it ready for production
// This will not be an issue cause still deving dingus

const routes = (
  <Route path="/interactions" mapMenuTitle="Home" component={App}>
<<<<<<< HEAD
    <IndexRoute component={Home} />
=======
    <IndexRoute />
>>>>>>> dev

    <Route path="/msg" mapMenuTitle="Example" component={MessageInteraction} />
    <Route path="/cards" mapMenuTitle="Example" component={CardsInteraction} />

  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
