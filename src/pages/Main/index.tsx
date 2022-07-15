import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core';

import ScrollTopButton from 'src/components/Buttons/ScrollTop';
import { SECTION__PICTURE } from 'src/pages/Main/sectionIds';
import Header from './Header';
import Picture from './Picture';
import About from './About';
import Skills from './Skills';
import Specialization from './Specialization';
import Examples from './Examples';
import Contacts from './Contacts';

const useStyles = makeStyles(theme => ({
  activeNavItem: {
    backgroundColor: theme.palette.action.active,
  },
}));

const Main: FC = () => {
  const classes = useStyles();

  return (
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

      <ScrollTopButton topSectionId={SECTION__PICTURE} />
    </>
  );
};

export default memo(Main);
