import React, { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  makeStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import errorPageImg from 'src/assets/somethingWentWrong.png';
import useMediaQueryPatched from 'src/hooks/useMediaQueryPatched';

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
    width: 300,
    maxWidth: '100%',
    height: 'auto',
  },
}));

const FrontendError: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [t] = useTranslation();
  const isMobileDevice = useMediaQueryPatched(theme.breakpoints.down('sm'));

  return (
    <>
      <Helmet>
        <title>azakharov</title>
      </Helmet>

      <Container maxWidth="lg" className={classes.root}>
        <Typography
          align="center"
          variant={isMobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
          {t('defaultErrorMessage')}
        </Typography>

        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src={errorPageImg}
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

export default memo(FrontendError);
