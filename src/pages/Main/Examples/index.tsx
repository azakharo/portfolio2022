import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 800,
    backgroundColor: theme.palette.action.active,
  },
}));

const Examples: FC = () => {
  const classes = useStyles();

  return <Box className={classes.root}>Examples</Box>;
};

export default memo(Examples);
