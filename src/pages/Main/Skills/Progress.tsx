import React, { FC, memo } from 'react';
import { Box, LinearProgress } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   root: {},
// }));

interface Props {
  label: string;
  value: number;
}

const Progress: FC<Props> = ({ label, value }) => (
  // const classes = useStyles();

  // This component repeats the layout of the About comp.
  <>
    <Box mb={1} display="flex" justifyContent="space-between">
      <span>{label}</span>
      <span>{value}%</span>
    </Box>
    <LinearProgress variant="determinate" color="secondary" value={value} />
  </>
);
export default memo(Progress);
