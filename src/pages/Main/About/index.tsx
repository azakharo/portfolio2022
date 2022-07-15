import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const About: FC = () => {
  const classes = useStyles();

  return <Box className={classes.root}>About</Box>;
};

export default memo(About);
