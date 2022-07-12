import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  const backgroundBeforeAfterStyles = {
    content: '""',
    display: 'block',
    width: 60,
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    background: '#fbc33e',
    borderRadius: '50%',
    animation: `$loadingBounce 2s infinite ${theme.transitions.easing.easeInOut}`,
    opacity: 0.5,
  };

  return {
    bounceLoading: {
      width: '100%',
      height: 'calc(100% - 50px)',
      position: 'fixed',
      left: 0,
      bottom: 0,
      zIndex: 9000,
      background: 'white',
    },

    background: {
      width: 90,
      height: 90,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      background: '#fff',
      borderRadius: 10,

      '&::before': backgroundBeforeAfterStyles,
      '&::after': { ...backgroundBeforeAfterStyles, animationDelay: '-1s' },
    },

    '@keyframes loadingBounce': {
      '0%': {
        transform: 'scale(0)',
      },
      '50%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0)',
      },
    },
  };
});

const BounceLoading: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.bounceLoading}>
      <div className={classes.background} />
    </div>
  );
};

export default memo(BounceLoading);
