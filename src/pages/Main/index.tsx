import React, { FC, memo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useScrollSpy from 'react-use-scrollspy';

import ScrollTopButton from 'src/components/Buttons/ScrollTop';
import {
  SECTION__ABOUT,
  SECTION__EXAMPLES,
  SECTION__PICTURE,
  SECTION__MY_STACK,
} from 'src/pages/Main/sectionIds';
import { FadeIn } from 'src/components/animations';
import MyStack from './MyStack';
import Header from './Header';
import Picture from './Picture';
import About from './About';
import Examples from './Examples';
import Contacts from './Contacts';
import HowIcanHelp from './HowIcanHelp';

const Main: FC = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
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
        <HowIcanHelp />
      </section>

      <section ref={sectionRefs[2]} id={SECTION__EXAMPLES}>
        <Examples />
      </section>

      <section ref={sectionRefs[3]} id={SECTION__MY_STACK}>
        <MyStack />
      </section>

      <FadeIn transition="1000ms ease-in-out">
        <Contacts />
      </FadeIn>

      <ScrollTopButton topSectionId={SECTION__PICTURE} />
    </>
  );
};

export default memo(Main);
