import React, { FC, memo, ReactNode } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(() => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
}));

interface Props {
  className?: string;
  icon?: ReactNode;
  label: string;
}

const Item: FC<Props> = ({ className, icon, label }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classNames(classes.item, className)}>
        {icon}
        {label}
      </Typography>
    </div>
  );
};

export default memo(Item);
