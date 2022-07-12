import React from 'react';

import logo, { ReactComponent as Logo } from 'src/assets/logo.svg';

export const getLogoImg = (): string => logo;

export const getLogoComponent = (): React.ElementType => Logo;
