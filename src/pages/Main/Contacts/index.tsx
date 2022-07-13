import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.action.focus,
  },
}));

const Contacts: FC = () => {
  const classes = useStyles();

  return <Box className={classes.root}>Contacts</Box>;
};

export default memo(Contacts);
