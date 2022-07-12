import React, { FC, memo, ReactElement } from 'react';
import { Slide, useScrollTrigger } from '@material-ui/core';

interface Props {
  children: ReactElement;
}

const HideOnScrollDown: FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default memo(HideOnScrollDown);
