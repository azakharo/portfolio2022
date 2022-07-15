import React, { FC, memo, useCallback } from 'react';
import { Fab, makeStyles, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

interface Props {
  topSectionId: string;
}

const ScrollTop: FC<Props> = ({ topSectionId }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = useCallback(() => {
    // eslint-disable-next-line unicorn/prefer-query-selector
    const anchor = document.getElementById(topSectionId);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [topSectionId]);

  return (
    <Zoom in={trigger}>
      <Fab
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        onClick={handleClick}
        className={classes.root}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default memo(ScrollTop);
