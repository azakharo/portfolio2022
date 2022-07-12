import { Theme } from '@material-ui/core';

import useMediaQueryPatched from 'src/hooks/useMediaQueryPatched';

const useIsSingleColumnMode = (): boolean =>
  useMediaQueryPatched((theme: Theme) => theme.breakpoints.down('sm'));

export default useIsSingleColumnMode;
