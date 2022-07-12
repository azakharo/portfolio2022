import React, { FC, memo, ReactNode } from 'react';

import Header from './Header';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default memo(MainLayout);
