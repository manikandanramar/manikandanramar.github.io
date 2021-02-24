import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../pages/Home';
import Error from '../pages/Error';

export default [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="error" path="*" component={Error} />
];