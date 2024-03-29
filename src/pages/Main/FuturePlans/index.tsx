import React, { FC, memo } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Trans, useTranslation } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';

const FuturePlans: FC = () => {
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
        <Box flex={1} textAlign="left" py={2} px={2}>
          <Typography variant="h3" color="textPrimary">
            {t('about__whatIwantToLearn__title')}
          </Typography>
        </Box>

        <Box flex={2} display="flex" flexWrap="wrap">
          <Typography variant="body1" color="textPrimary">
            <Trans i18nKey="about__whatIwantToLearn__text" />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(FuturePlans);
