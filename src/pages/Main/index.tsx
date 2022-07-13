import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Picture from './Picture';
import About from './About';
import Skills from './Skills';
import Specialization from './Specialization';
import Examples from './Examples';
import Contacts from './Contacts';

const Main: FC = () => (
  <>
    <Helmet>
      <title>AZA - Portfolio</title>
    </Helmet>

    <Header />
    <Picture />
    <About />
    <Skills />
    <Specialization />
    <Examples />
    <Contacts />
  </>
);

export default memo(Main);
