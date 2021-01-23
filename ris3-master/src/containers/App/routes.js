import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Base from '../Pages/Base';

const routes = [
  {
    path: '',
    component: <Base />,
  },
];

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => (
            <Route path={route.path}>
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
}
