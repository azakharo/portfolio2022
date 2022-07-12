import classNames from 'classnames';
import React, { FC, memo, useMemo } from 'react';
import { Button, ButtonProps, makeStyles } from '@material-ui/core';

import { COLOR__DARK_GREY } from 'src/theme';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 400,
    fontSize: 16,
    borderRadius: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  containedError: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.error.main,
    border: `1px solid ${COLOR__DARK_GREY}`,
    '&.Mui-disabled': {
      color: theme.palette.text.secondary,
      backgroundColor: 'transparent',
    },
    '&:hover': {
      color: theme.palette.error.main,
      backgroundColor: 'transparent',
      borderColor: theme.palette.error.main,
    },
  },
  outlinedError: {
    color: theme.palette.error.main,
    backgroundColor: 'transparent',
    borderColor: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.error.main,
      borderColor: COLOR__DARK_GREY,
    },
  },
  newText: {
    padding: 0,
    fontSize: 14,
    '&:hover': {
      background: 'none',
    },
  },
  link: {
    padding: 0,
    textAlign: 'left',
    fontSize: 14,
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'underline',
      background: 'none',
    },
  },
  newTextError: {
    padding: 0,
    fontSize: 14,
    color: theme.palette.error.main,
    '&:hover': {
      background: 'none',
    },
  },
  textError: {
    color: theme.palette.error.main,
  },
  linkError: {
    padding: 0,
    textAlign: 'left',
    textDecoration: 'underline',
    fontSize: 14,
    '&:hover': {
      textDecoration: 'underline',
      background: 'none',
    },
  },
}));

export interface Props extends Omit<ButtonProps, 'color' | 'variant'> {
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'error';
  variant?: 'contained' | 'outlined' | 'text' | 'newText' | 'link';
}

const NewDesignButton: FC<Props> = ({
  children,
  className,
  color,
  variant,
  ...restProps
}) => {
  const classes = useStyles();

  const isMuiColor = color !== 'error';
  const isMuiVariant = variant !== 'newText' && variant !== 'link';

  const variantColorClassName = useMemo((): string | null => {
    if (color === 'error') {
      switch (variant) {
        case 'contained':
          return classes.containedError;
        case 'outlined':
          return classes.outlinedError;
        case 'newText':
          return classes.newTextError;
        case 'text':
          return classes.textError;
        case 'link':
          return classes.linkError;
        default:
          return classes.textError;
      }
    } else {
      switch (variant) {
        case 'newText':
          return classes.newText;
        case 'link':
          return classes.link;
        default:
          return null;
      }
    }
  }, [variant, color, classes]);

  return (
    <Button
      className={classNames(classes.root, variantColorClassName, className)}
      color={isMuiColor ? color : undefined}
      variant={isMuiVariant ? variant : undefined}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default memo(NewDesignButton);
