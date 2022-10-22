import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
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
  }>
> = ({ from, to, children, ...restProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: '600ms ease-in-out',
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
              ...restProps,
            }
          : {
              ...defaultStyles,
              ...from,
              ...restProps,
            }
      }
    >
      {children}
    </div>
  );
};

export const FadeIn: FC<PropsWithChildren<unknown>> = ({
  children,
  ...restProps
}) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }} {...restProps}>
    {children}
  </AnimateIn>
);

export const FadeUp: FC<PropsWithChildren<unknown>> = ({
  children,
  ...restProps
}) => (
  <AnimateIn
    from={{ opacity: 0, translate: '0 2rem' }}
    to={{ opacity: 1, translate: 'none' }}
    {...restProps}
  >
    {children}
  </AnimateIn>
);

export const ScaleIn: FC<PropsWithChildren<unknown>> = ({
  children,
  ...restProps
}) => (
  <AnimateIn from={{ scale: '0' }} to={{ scale: '1' }} {...restProps}>
    {children}
  </AnimateIn>
);
