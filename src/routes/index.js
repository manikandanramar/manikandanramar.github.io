import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../pages/Home';
import Error from '../pages/Error';
import Videos from '../pages/Videos';
import AboutMe from '../pages/AboutMe';

export default [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="videos" exact path="/videos" component={Videos} />,
  <Route key="aboutme" exact path="/aboutme" component={AboutMe} />,
  <Route key="error" path="*" component={Error} />
];