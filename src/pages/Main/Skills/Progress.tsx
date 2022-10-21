import random from 'lodash/random';
import React, { FC, memo, ReactNode, useMemo, useRef, useState } from 'react';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';
import useInterval from 'ahooks/lib/useInterval';
import useInViewport from 'ahooks/lib/useInViewport';

const useStyles = makeStyles(theme => ({
  root: {
    height: 3,
    borderRadius: 3,
    backgroundColor: theme.palette.grey[300],
  },
  bar: {
    borderRadius: 3,
    backgroundColor: '#1a90ff',
  },
}));

interface Props {
  label: string;
  value: number;
  icon?: ReactNode;
}

const Progress: FC<Props> = ({ label, value, icon }) => {
  const classes = useStyles();
  const containerRef = useRef(null);
  const [isVisible] = useInViewport(containerRef, {
    threshold: 1,
  });
  const interval = useMemo(() => random(1, 5, false) * 10, []); // ms

  const [currentValue, setCurrentValue] = useState(0);
  const clearInterval = useInterval(
    () => {
      if (currentValue < value) {
        setCurrentValue(currentValue + 1);
      } else {
        clearInterval();
      }
    },
    isVisible ? interval : undefined,
  );

  // This component repeats the layout of the About comp.
  return (
    <div ref={containerRef}>
      <Box mb={1} display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          {icon && <>{icon}&nbsp;</>}
          <span>{label}</span>
        </Box>
        <span>{currentValue}%</span>
      </Box>
      <LinearProgress
        variant="determinate"
        value={currentValue}
        classes={{
          root: classes.root,
          bar: classes.bar,
        }}
      />
    </div>
  );
};

export default memo(Progress);
