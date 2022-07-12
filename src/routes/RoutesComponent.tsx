import React, { FC, memo, useEffect } from 'react';
import { Switch, Redirect, useLocation, useHistory } from 'react-router-dom';

import { EnhancedRouteProps } from 'src/types/common';
import EmptyLayout from 'src/layouts/EmptyLayout';
import { ROUTE__ERROR__404, ROUTE__TEST } from 'src/routes/routes';
import lazyWithRetry from 'src/utils/lazyWithRetry';
import Route from './EnhancedRoute';

const Test = lazyWithRetry(() => import('src/pages/Test'));
const NotFound = lazyWithRetry(() => import('src/pages/errors/NotFound'));

const routesProps: EnhancedRouteProps[] = [
  {
    path: ROUTE__ERROR__404,
    component: NotFound,
    exact: true,
    layout: EmptyLayout,
  },
  {
    path: ROUTE__TEST,
    component: Test,
    exact: true,
    layout: EmptyLayout,
  },
];

const Routes: FC = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === '/') {
      history.replace(ROUTE__TEST);
    }
  }, [location.pathname, history]);

  return (
    <Switch>
      {routesProps.map(routeProps => (
        <Route key={routeProps.path as string} {...routeProps} />
      ))}
      <Redirect from="*" to={ROUTE__ERROR__404} />
    </Switch>
  );
};

export default memo(Routes);
