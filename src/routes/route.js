import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryRecipes from './CategoryRecipes';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/category/:categoryName" component={CategoryRecipes} />
      </Switch>
    </Router>
  );
}

export default Routes;
