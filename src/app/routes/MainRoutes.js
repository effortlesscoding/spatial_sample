// @flow weak

import React            from 'react';
import {
  Route,
  Switch
 }                      from 'react-router';
import Login            from '../views/login';
import PrivateRoute     from '../components/privateRoute/PrivateRoute';
import { Profile, }        from '../views/protected/profile';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/profile" component={Profile} />
    </Switch>
  );
};

export default MainRoutes;
