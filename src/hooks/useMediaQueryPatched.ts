import { Theme, useMediaQuery } from '@material-ui/core';
import { Options } from '@material-ui/core/useMediaQuery/useMediaQuery';

const useMediaQueryPatched = (
  query: string | ((theme: Theme) => string),
  options?: Options,
): boolean =>
  useMediaQuery(query, {
    noSsr: true,
    ...options,
  });

export default useMediaQueryPatched;
