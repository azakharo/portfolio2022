import React, { FC, memo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useScrollSpy from 'react-use-scrollspy';

import ScrollTopButton from 'src/components/Buttons/ScrollTop';
import {
  SECTION__ABOUT,
  SECTION__EXAMPLES,
  SECTION__PICTURE,
  SECTION__SKILLS,
  SECTION__SPECIALIZATION,
} from 'src/pages/Main/sectionIds';
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
    offsetPx: -64, // height of the header
  });

  return (
    <>
      <Helmet>
        <title>AZA - Portfolio</title>
      </Helmet>

      <Header activeSectionIndex={activeSectionIndex} />

      <section ref={sectionRefs[0]} id={SECTION__PICTURE}>
        <Picture />
      </section>

      <section ref={sectionRefs[1]} id={SECTION__ABOUT}>
        <About />
      </section>

      <section ref={sectionRefs[2]} id={SECTION__SKILLS}>
        <Skills />
      </section>

      <section ref={sectionRefs[3]} id={SECTION__SPECIALIZATION}>
        <Specialization />
      </section>

      <section ref={sectionRefs[4]} id={SECTION__EXAMPLES}>
        <Examples />
      </section>

      <Contacts />

      <ScrollTopButton topSectionId={SECTION__PICTURE} />
    </>
  );
};

export default memo(Main);
