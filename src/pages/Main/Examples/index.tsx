// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, memo } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import { examples } from './config';
import Example from './Example';

const useStyles = makeStyles(() => ({
  root: {},
  grid: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'flex-start',

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

const Examples: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  return (
    <Container maxWidth="lg">
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
          {examples.map(ex => (
            <Example key={ex.nameKey} data={ex} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Examples);
