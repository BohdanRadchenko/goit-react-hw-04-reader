import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Reader from '../Publications/Reader';

const App = () => (
  <Switch>
    <Route path="/reader" component={Reader} />
    <Redirect from="/*" to="/reader" />
  </Switch>
);

export default App;
