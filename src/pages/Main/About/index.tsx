import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SECTION__ABOUT } from 'src/pages/Main/sectionIds';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const About: FC = () => {
  const classes = useStyles();

  return (
    <Box id={SECTION__ABOUT} className={classes.root}>
      About
    </Box>
  );
};

export default memo(About);
