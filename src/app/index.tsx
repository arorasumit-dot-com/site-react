import * as React from 'react';
import { Route, Switch } from 'react-router';
import './style.css';

// import { App as TodoApp } from 'app/containers/App';
import { Home } from 'app/containers/Home';
import { About } from 'app/containers/About';
import { Expertise } from 'app/containers/Expertise';
import { Journey } from 'app/containers/Journey';

import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/expertise" component={Expertise} />
    <Route path="/journey" component={Journey} />
    {/* <Route path="/todo" component={TodoApp} /> */}
    <Route path="/" component={Home} />
  </Switch>
));
