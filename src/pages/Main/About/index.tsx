import React, { FC, memo } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import SplitText from 'src/components/SplitText';

const About: FC = () => {
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  return (
    <Container maxWidth="lg">
      <Box display={isSingleColumn ? undefined : 'flex'} p={4} gridGap={40}>
        {/* Left part */}
        <Box flex={1}>
          <Box textAlign="center" my={2}>
            <Typography variant="h2" color="textPrimary">
              <SplitText
                text={t('about__title')}
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {t('about__subTitle')}
            </Typography>
          </Box>
        </Box>

        {/* Right part */}
        <Box flex={2}>
          <Typography variant="body1" color="textPrimary">
            {t('about__whereIlive')}
          </Typography>
          <br />
          <Typography variant="body1" color="textPrimary">
            <Trans i18nKey="about__myInterests" />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(About);
