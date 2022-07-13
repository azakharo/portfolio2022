import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SECTION__SPECIALIZATION } from 'src/pages/Main/sectionIds';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Specialization: FC = () => {
  const classes = useStyles();

  return (
    <Box id={SECTION__SPECIALIZATION} className={classes.root}>
      Specialization
    </Box>
  );
};

export default memo(Specialization);
