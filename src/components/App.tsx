// import Test from '../Test.js';
import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import CharacterSelect from '../pages/characterSelect/characterSelect';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={CharacterSelect} />
    </Switch>
  );
}
