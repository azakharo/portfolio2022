import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SECTION__EXAMPLES } from 'src/pages/Main/sectionIds';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.action.active,
  },
}));

const Examples: FC = () => {
  const classes = useStyles();

  return (
    <Box id={SECTION__EXAMPLES} className={classes.root}>
      Examples
    </Box>
  );
};

export default memo(Examples);
