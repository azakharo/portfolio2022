import React from 'react';
import { RouteProps } from 'react-router-dom';

export interface EnhancedRouteProps extends RouteProps {
  layout?: React.FC;
}
