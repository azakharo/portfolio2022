import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import useMediaQueryPatched from 'src/hooks/useMediaQueryPatched';
import TechGrid from './TechGrid';

const useStyles = makeStyles(() => ({
  techGridContainer: {
    background: 'linear-gradient(to bottom, black, rgba(255, 0, 0, 0))',
  },
  techGrid: {
    width: '100%',
    height: '100%',
  },
  portrait: {
    height: '50vh',
    backgroundImage: `url("${process.env.PUBLIC_URL}/portrait.jpg")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Picture: FC = () => {
  const classes = useStyles();
  const doShowTechGrid = useMediaQueryPatched(theme =>
    theme.breakpoints.up('md'),
  );

  return (
    <Box display="flex">
      {doShowTechGrid && (
        <Box flex={1} className={classes.techGridContainer}>
          <TechGrid className={classes.techGrid} />
        </Box>
      )}

      {/* Portrait */}
      <Box flex={1} className={classes.portrait} />
    </Box>
  );
};

export default memo(Picture);
