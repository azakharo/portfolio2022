import React, { memo } from 'react';
import { Route as OrdinaryRoute } from 'react-router-dom';

import { EnhancedRouteProps } from 'src/types/common';
import MainLayout from 'src/layouts/MainLayout';

const EnhancedRoute: React.FC<EnhancedRouteProps> = props => {
  const { layout: Layout, component: Component, ...restProps } = props;

  if (Component) {
    // TODO componentProps could be ANY. Why are the props passed to both Layout and Component?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const renderRoute = componentProps =>
      Layout ? (
        <Layout {...componentProps}>
          <Component {...componentProps} />
        </Layout>
      ) : (
        <MainLayout>
          <Component {...componentProps} />
        </MainLayout>
      );

    return <OrdinaryRoute {...restProps} render={renderRoute} />;
  }

  return null;
};

export default memo(EnhancedRoute);
