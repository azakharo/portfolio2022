import React, { FC, memo, ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { getLabel } from 'src/i18n/utils';

interface Props {
  icon: ReactNode;
  title?: string;
  titleKey?: string;
  textKey: string;
  backgroundColor?: string;
}

const Card: FC<Props> = ({
  title,
  titleKey,
  textKey,
  icon,
  backgroundColor,
}) => {
  const [t] = useTranslation();

  return (
    <Box px={4} style={{ backgroundColor: backgroundColor || 'white' }} py={2}>
      <Box mb={2}>{icon}</Box>
      <Box mb={2}>
        <Typography variant="h5" color="textPrimary">
          {getLabel(t, titleKey, title)}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" color="textSecondary">
          {t(textKey)}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(Card);
