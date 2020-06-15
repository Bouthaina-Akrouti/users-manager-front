import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  isPublic,
  isAuthorized,
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      render={props => {
        if (isPublic || isAuthorized) return <Component { ...props } />;
        return <Redirect to={{pathname: '/login'}} />;
      }}
    >
      
    </Route>
  )
}
