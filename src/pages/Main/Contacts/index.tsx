import React, { FC, memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SECTION__CONTACTS } from 'src/pages/Main/sectionIds';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.action.focus,
  },
}));

const Contacts: FC = () => {
  const classes = useStyles();

  return (
    <Box id={SECTION__CONTACTS} className={classes.root}>
      Contacts
    </Box>
  );
};

export default memo(Contacts);
