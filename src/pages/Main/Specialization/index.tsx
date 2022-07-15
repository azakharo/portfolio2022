import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Specialization: FC = () => {
  const classes = useStyles();

  return <Box className={classes.root}>Specialization</Box>;
};

export default memo(Specialization);
