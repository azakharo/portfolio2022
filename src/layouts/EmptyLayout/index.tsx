import React, { FC, memo } from 'react';

const EmptyLayout: FC = props => {
  const { children } = props;

  return <>{children}</>;
};

export default memo(EmptyLayout);
