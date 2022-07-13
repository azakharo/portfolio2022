import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SECTION__TOP } from 'src/pages/Main/sectionIds';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Picture: FC = () => {
  const classes = useStyles();

  return (
    <Box id={SECTION__TOP} className={classes.root}>
      Picture
    </Box>
  );
};

export default memo(Picture);
