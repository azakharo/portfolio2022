import React, { FC, memo } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';

const About: FC = () => {
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  return (
    <Container maxWidth="lg">
      <Box display={isSingleColumn ? undefined : 'flex'} p={4} gridGap={40}>
        {/* Left part */}
        <Box flex={1}>
          {/* =============================================================== */}
          {/* About myself */}
          <Box textAlign="center" my={2}>
            <Typography variant="h2" color="textPrimary">
              {t('about__title')}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {t('about__subTitle')}
            </Typography>
          </Box>

          <Typography variant="body1" color="textPrimary">
            {t('about__whereIlive')}
          </Typography>
          <br />
          <Typography variant="body1" color="textPrimary">
            {t('about__myInterests')}
          </Typography>
          {/* About myself */}
          {/* =============================================================== */}
        </Box>

        {/* Right part */}
        <Box flex={2}>
          {/* WORKAROUND issue with text-wrap: balance */}
          <Box
            textAlign="center"
            mt={isSingleColumn ? 6 : 2}
            mb={2}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sx={{ textWrap: 'balance' }}
          >
            <Typography variant="h2" color="textPrimary">
              {t('about__whatIhaveLearned__title')}
            </Typography>
          </Box>

          <Typography variant="body1" color="textPrimary">
            <Trans i18nKey="about__whatIhaveLearned__text" />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(About);
