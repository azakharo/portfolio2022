import React, { FC, memo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import useScrollSpy from 'react-use-scrollspy';

import ScrollTopButton from 'src/components/Buttons/ScrollTop';
import {
  SECTION__ABOUT,
  SECTION__EXAMPLES,
  SECTION__PICTURE,
  SECTION__SKILLS,
  SECTION__SPECIALIZATION,
} from 'src/pages/Main/sectionIds';
import { FadeIn } from 'src/components/animations';
import Header from './Header';
import Picture from './Picture';
import About from './About';
import Skills from './Skills';
import Specialization from './Specialization';
import Examples from './Examples';
import Contacts from './Contacts';

const Main: FC = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const activeSectionIndex = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80, // height of the header + some gap
  });

  return (
    <>
      <Helmet>
        <title>azakharov</title>
      </Helmet>

      <Header activeSectionIndex={activeSectionIndex} />

      <section ref={sectionRefs[0]} id={SECTION__PICTURE}>
        <Picture />
      </section>

      <section ref={sectionRefs[1]} id={SECTION__ABOUT}>
        <About />
      </section>

      <section ref={sectionRefs[2]} id={SECTION__EXAMPLES}>
        <Examples />
      </section>

      <section ref={sectionRefs[3]} id={SECTION__SPECIALIZATION}>
        <Box mt={4} mb={10}>
          <Specialization />
        </Box>
      </section>

      <section ref={sectionRefs[4]} id={SECTION__SKILLS}>
        <Skills />
      </section>

      <FadeIn transition="1000ms ease-in-out">
        <Contacts />
      </FadeIn>

      <ScrollTopButton topSectionId={SECTION__PICTURE} />
    </>
  );
};

export default memo(Main);
