import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../pages/AboutUsPage/AboutUs';

const AppRoutes = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/about" component={AboutUs} exact />
      </Switch>
    </Router>
  </div>
);

export default AppRoutes;
