import React, { memo } from 'react';
import { Route as OrdinaryRoute, RouteProps } from 'react-router-dom';

const EnhancedRoute: React.FC<RouteProps> = props => {
  const { component: Component, ...restProps } = props;

  if (Component) {
    const renderRoute = (componentProps: unknown) => (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Component {...componentProps} />
    );

    return <OrdinaryRoute {...restProps} render={renderRoute} />;
  }

  return null;
};

export default memo(EnhancedRoute);
