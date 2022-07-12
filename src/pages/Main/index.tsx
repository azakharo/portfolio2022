import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';

const Main: FC = () => (
  <>
    <Helmet>
      <title>AZA - Test</title>
    </Helmet>

    <div>Here will be the content!</div>
  </>
);

export default memo(Main);
