import React, { FC, memo } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const NoDataMsg: FC = () => {
  const [t] = useTranslation();

  return <Typography variant="body1">{t('noDataMessage')}</Typography>;
};

export default memo(NoDataMsg);
