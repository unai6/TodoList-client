import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = props => {

  
  const { component: Component, ...rest } = props;
  const token = localStorage.getItem('token');

  return (
    <>
      { token ? (

        <Route render={props => <Component {...props} />} {...rest} />
      ) : (
        <Redirect to="/" /> 
      )}
    </>
  );
};
