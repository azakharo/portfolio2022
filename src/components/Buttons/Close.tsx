import React, { FC, memo } from 'react';
import { IconButtonProps, IconButton } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const CloseButton: FC<IconButtonProps> = props => (
  <IconButton {...props}>
    <CloseOutlinedIcon />
  </IconButton>
);

export default memo(CloseButton);
