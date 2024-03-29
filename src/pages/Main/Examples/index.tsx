// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useInViewport from 'ahooks/lib/useInViewport';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import { getMobileMediaQuery, getTabletMediaQuery } from 'src/hooks/responsive';
import { examples } from './config';
import Example from './Example';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'flex-start',

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    [getMobileMediaQuery(theme)]: {
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(4),
    },

    [getTabletMediaQuery(theme)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

const Examples: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  const containerRef = useRef(null);
  const [isVisible] = useInViewport(containerRef);
  const [wasVisible, setWasVisible] = useState(false);

  useEffect(() => {
    if (!wasVisible && isVisible) {
      setWasVisible(true);
    }
  }, [isVisible, wasVisible]);

  return (
    <Container maxWidth="lg" ref={containerRef}>
      <Box
        display={isSingleColumn ? undefined : 'flex'}
        p={4}
        gridGap={40}
        py={6}
        pl={2}
        pr={6}
      >
        {/* left column */}
        <Box flex={1} textAlign="left" py={2} px={2}>
          {/* Title */}
          <Typography variant="h2" color="textPrimary">
            {t('examples__title')}
          </Typography>

          {/* Subtitle */}
          <Typography variant="subtitle1" color="textSecondary">
            {t('example__subTitle')}
          </Typography>
        </Box>

        {/* right column - example cards */}
        <Box flex={2} className={classes.grid}>
          {wasVisible &&
            examples.map(ex => <Example key={ex.nameKey} data={ex} />)}
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Examples);
