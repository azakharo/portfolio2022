import React, { FC, memo } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { FaReact } from 'react-icons/fa';
import { GiCaveman } from 'react-icons/gi';
import { FcProcess } from 'react-icons/fc';
import { BiBuildingHouse } from 'react-icons/bi';
import { SiCodereview, SiJest } from 'react-icons/si';

import { useTranslation } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import Progress from './Progress';

const items = [
  {
    labelKey: 'howIcanHelp__headDevelopment',
    value: 100,
    icon: <GiCaveman color="orange" />,
  },
  {
    labelKey: 'howIcanHelp__createInfra',
    value: 100,
    icon: <FaReact color="#5dd3f3" />,
  },
  {
    labelKey: 'howIcanHelp__createArch',
    value: 100,
    icon: <BiBuildingHouse />,
  },
  {
    labelKey: 'howIcanHelp__orgReview',
    value: 100,
    icon: <SiCodereview color="violet" />,
  },
  {
    labelKey: 'howIcanHelp__introTesting',
    value: 100,
    icon: <SiJest color="#94404d" />,
  },
  {
    labelKey: 'howIcanHelp__orgDeploy',
    value: 100,
    icon: <FcProcess color="blue" />,
  },
];

const HowIcanHelp: FC = () => {
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  return (
    <Container maxWidth="lg">
      <Box display={isSingleColumn ? undefined : 'flex'} p={4} gridGap={40}>
        {/* Left part */}
        <Box flex={1} />

        {/* Right part */}
        <Box flex={2}>
          <Box mb={2}>
            <Typography variant="h4" color="textPrimary">
              {t('howIcanHelp__subTitle')}:
            </Typography>
          </Box>

          {items.map(({ labelKey, value, icon }) => (
            <Box key={labelKey} mb={2}>
              <Progress label={t(labelKey)} value={value} icon={icon} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
export default memo(HowIcanHelp);
