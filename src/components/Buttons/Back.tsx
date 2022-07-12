import React, { FC, memo, useCallback } from 'react';
import { IconButton, useTheme } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowForwardOutlined from '@material-ui/icons/ArrowForwardOutlined';
import { useHistory } from 'react-router';

interface Props {
  className?: string;
  // If not specified, then history.goBack is called
  onClick?: () => void;
}

const BackButton: FC<Props> = ({ className, onClick }) => {
  const history = useHistory();
  const theme = useTheme();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    return history.goBack();
  }, [history, onClick]);

  return (
    <IconButton onClick={handleClick} className={className}>
      {theme.direction === 'rtl' ? (
        <ArrowForwardOutlined />
      ) : (
        <ArrowBackOutlinedIcon />
      )}
    </IconButton>
  );
};

export default memo(BackButton);
