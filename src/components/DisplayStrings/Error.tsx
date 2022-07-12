import React, { FC, memo } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Props {
  message?: string;
}

const Error: FC<Props> = ({ message }) => {
  const [t] = useTranslation();

  return (
    <Typography variant="body1" color="error">
      {message || t('defaultErrorMessage')}
    </Typography>
  );
};

export default memo(Error);
