import React, { FC, memo, useCallback } from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation();
  const classes = useStyles();
  const { imgPath, nameKey } = data;

  const handleClick = useCallback(() => {
    // open popup with additional info
  }, []);

  return (
    <ButtonBase onClick={handleClick}>
      <img src={imgPath} alt={t(nameKey)} className={classes.img} />
    </ButtonBase>
  );
};

export default memo(Example);