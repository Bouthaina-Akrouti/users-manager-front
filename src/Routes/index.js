import React from 'react';
import { Login } from '../pages/Login';
import { Users } from '../pages/Users';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = ({ isAuthorized }) => {
  console.log(isAuthorized);
  const routes = [
    {
      component: Login,
      path: '/login',
      exact: true,
      isPublic: true,
    },
    {
      component: Users,
      path: '/users',
      exact: true,
    }
  ];
  return (
    <Switch>
      {
        routes.map(route => <ProtectedRoute key={ route.path } component={route.component} path={route.path} exact={route.exact} isPublic={ !!route.isPublic } isAuthorized={ isAuthorized } />)
      }
    </Switch>
  )
}
