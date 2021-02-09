import React from "react";
import { Route, Redirect } from "react-router-dom";

const RestrictedRoute = ({ path, exact, component, restricted, isAuth }) => {
  return !isAuth && restricted ? (
    <Route path={path} exact={exact} component={component} />
    ) : (
      <Redirect to='/home' />
  );
};

export default RestrictedRoute;