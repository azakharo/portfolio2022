import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Skills: FC = () => {
  const classes = useStyles();

  return <Box className={classes.root}>Skills</Box>;
};

export default memo(Skills);
