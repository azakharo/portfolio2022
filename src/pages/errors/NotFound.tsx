import React, { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import pageNotFoundImage from 'src/assets/pageNotFound.svg';
import { useIsMobile } from 'src/hooks/responsive';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    width: 560,
    maxWidth: '100%',
    height: 'auto',
    maxHeight: 300,
  },
}));

const NotFound: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const mobileDevice = useIsMobile();

  return (
    <>
      <Helmet>
        <title>azakharov</title>
      </Helmet>

      <Container maxWidth="lg" className={classes.root}>
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
          {t('errorMessage__pageNotFound')}
        </Typography>

        <Typography align="center" variant="subtitle2" color="textSecondary">
          {t('errorPage404__hint__wrongUrl')}
        </Typography>

        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src={pageNotFoundImage}
          />
        </Box>

        <Box mt={6} display="flex" justifyContent="center">
          <Button
            color="primary"
            component={RouterLink}
            to="/"
            variant="outlined"
          >
            {t('backToHomeButton__text')}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default memo(NotFound);
