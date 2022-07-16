import random from 'lodash/random';
import React, { FC, memo, useMemo, useState } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import useInterval from 'ahooks/lib/useInterval';

// const useStyles = makeStyles(theme => ({
//   root: {},
// }));

interface Props {
  label: string;
  value: number;
}

const Progress: FC<Props> = ({ label, value }) => {
  const interval = useMemo(() => random(1, 5, false) * 10, []); // ms

  const [currentValue, setCurrentValue] = useState(0);
  const clearInterval = useInterval(() => {
    if (currentValue < value) {
      setCurrentValue(currentValue + 1);
    } else {
      clearInterval();
    }
  }, interval);

  // const classes = useStyles();

  // This component repeats the layout of the About comp.
  return (
    <>
      <Box mb={1} display="flex" justifyContent="space-between">
        <span>{label}</span>
        <span>{currentValue}%</span>
      </Box>
      <LinearProgress
        variant="determinate"
        color="secondary"
        value={currentValue}
      />
    </>
  );
};

export default memo(Progress);
