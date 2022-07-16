import React, { FC, memo } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  const [t] = useTranslation();

  return (
    <Container maxWidth="lg">
      <Box display="flex" p={4} gridGap={40}>
        <Box flex={1} textAlign="center">
          <Typography variant="h2" color="textPrimary">
            {t('about__title', 'Привет!')}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {t('about__subTitle', 'немного о себе...')}
          </Typography>
        </Box>
        <Box flex={2}>
          <Typography variant="body1" color="textPrimary">
            {t('about__whereIlive')}
          </Typography>
          <br />
          <Typography variant="body1" color="textPrimary">
            {t('about__myInterests')}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(About);
