import React, { FC, memo, ReactNode } from 'react';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: 3,
    borderRadius: 3,
    backgroundColor: theme.palette.grey[300],
  },
  bar: {
    borderRadius: 3,
    backgroundColor: 'violet',
  },
}));

interface Props {
  label: string;
  icon?: ReactNode;
}

const Progress: FC<Props> = ({ label, icon }) => {
  const classes = useStyles();

  // This component repeats the layout of the About comp.
  return (
    <div>
      <Box mb={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          {icon && <div style={{ fontSize: 22 }}>{icon}&nbsp;</div>}
          <span>{label}</span>
        </Box>
      </Box>
      <LinearProgress
        variant="determinate"
        value={100}
        classes={{
          root: classes.root,
          bar: classes.bar,
        }}
      />
    </div>
  );
};

export default memo(Progress);
