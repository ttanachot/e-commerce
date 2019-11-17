import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAccessToken } from '../Utils/auth';

const PrivateRoute = props => (
  getAccessToken()
    ? <Route {...props} />
    : <Redirect to="/" />
);

export default PrivateRoute;
