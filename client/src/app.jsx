import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/register';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
