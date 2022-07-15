import React, { FC, memo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useScrollSpy from 'react-use-scrollspy';

import ScrollTopButton from 'src/components/Buttons/ScrollTop';
import { SECTION__PICTURE } from 'src/pages/Main/sectionIds';
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
    offsetPx: -80,
  });

  return (
    <>
      <Helmet>
        <title>AZA - Portfolio</title>
      </Helmet>

      <Header activeSectionIndex={activeSectionIndex} />

      <section ref={sectionRefs[0]}>
        <Picture />
      </section>

      <section ref={sectionRefs[1]}>
        <About />
      </section>

      <section ref={sectionRefs[2]}>
        <Skills />
      </section>

      <section ref={sectionRefs[3]}>
        <Specialization />
      </section>

      <section ref={sectionRefs[4]}>
        <Examples />
      </section>

      <Contacts />

      <ScrollTopButton topSectionId={SECTION__PICTURE} />
    </>
  );
};

export default memo(Main);
