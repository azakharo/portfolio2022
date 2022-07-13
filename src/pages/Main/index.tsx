import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';

const Main: FC = () => (
  <>
    <Helmet>
      <title>AZA - Test</title>
    </Helmet>

    <Header />
  </>
);

export default memo(Main);
