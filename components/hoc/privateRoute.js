import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component: component, ...rest ,auth}) => (
  <Route
    {...rest}
    render={(props) =>
      auth.user.isAuthorization ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  ></Route>
);
export default PrivateRoute;
