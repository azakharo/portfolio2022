import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Picture: FC = () => {
  const classes = useStyles();

  return <Box className={classes.root}>Picture</Box>;
};

export default memo(Picture);
