import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ItemDetailPage from './Pages/ItemDetailPage/ItemDetailPage';

const AppRouter = props => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={ItemDetailPage} />
    </Switch>
  </Router>
);

export default AppRouter;