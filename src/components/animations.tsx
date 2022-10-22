import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

function useElementOnScreen(ref: RefObject<Element>, rootMargin = '0px') {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isIntersecting;
}

const AnimateIn: FC<
  PropsWithChildren<{
    from: CSSProperties;
    to: CSSProperties;
    transition?: string;
  }>
> = ({ from, to, children, transition = '600ms ease-in-out' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition,
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};

interface AnimationProps {
  children: ReactNode;
  transition?: string;
}

export const FadeIn: FC<AnimationProps> = ({ children, transition }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }} transition={transition}>
    {children}
  </AnimateIn>
);

export const FadeUp: FC<AnimationProps> = ({ children, transition }) => (
  <AnimateIn
    from={{ opacity: 0, translate: '0 2rem' }}
    to={{ opacity: 1, translate: 'none' }}
    transition={transition}
  >
    {children}
  </AnimateIn>
);

export const ScaleIn: FC<AnimationProps> = ({ children, transition }) => (
  <AnimateIn from={{ scale: '0' }} to={{ scale: '1' }} transition={transition}>
    {children}
  </AnimateIn>
);
