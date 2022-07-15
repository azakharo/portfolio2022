import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { SECTION__SKILLS } from 'src/pages/Main/sectionIds';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Skills: FC = () => {
  const classes = useStyles();

  return (
    <Box id={SECTION__SKILLS} className={classes.root}>
      Skills
    </Box>
  );
};

export default memo(Skills);
