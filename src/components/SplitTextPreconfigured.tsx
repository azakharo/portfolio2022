import React, { FC, useRef } from 'react';
import useInViewport from 'ahooks/lib/useInViewport';
import SplitText from './SplitText';

interface Props {
  text: string;
}

export const SplitTextPreconfigured: FC<Props> = ({ text }) => {
  const containerRef = useRef(null);
  const [isVisible] = useInViewport(containerRef);

  return (
    <div ref={containerRef}>
      {isVisible && (
        <SplitText
          text={text}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      )}
    </div>
  );
};
