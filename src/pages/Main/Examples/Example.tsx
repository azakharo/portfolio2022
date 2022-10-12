import React, { FC, memo, useCallback } from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';

import { ExampleData } from 'src/pages/Main/Examples/config';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
}));

interface Props {
  data: ExampleData;
}

const Example: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { imgPath, name } = data;

  const handleClick = useCallback(() => {
    // open popup with additional info
  }, []);

  return (
    <ButtonBase onClick={handleClick}>
      <img src={imgPath} alt={name} className={classes.img} />
    </ButtonBase>
  );
};

export default memo(Example);
