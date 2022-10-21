import { Theme } from '@material-ui/core';

import useMediaQueryPatched from 'src/hooks/useMediaQueryPatched';

export const getMobileMediaQuery = (theme: Theme): string =>
  theme.breakpoints.down('xs');
export const getTabletMediaQuery = (theme: Theme): string =>
  theme.breakpoints.between('sm', 'md');
export const getDesktopMediaQuery = (theme: Theme): string =>
  theme.breakpoints.up('lg');

export const useIsMobile = (): boolean =>
  useMediaQueryPatched(getMobileMediaQuery);

export const useIsTablet = (): boolean =>
  useMediaQueryPatched(getTabletMediaQuery);

export const useIsDesktop = (): boolean =>
  useMediaQueryPatched(getDesktopMediaQuery);
