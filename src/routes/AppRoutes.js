import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../pages/AboutUsPage/AboutUs';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Fragment>
            <Switch>
              <Route path='/about' component={AboutUs} exact />
            </Switch>
        </Fragment>
      </Router>
    </div>
  )
}

export default AppRoutes;