import React, { FC, memo, useCallback } from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { COLOR__DARK_GREY } from 'src/theme';
import { useAnalytics } from 'src/hooks/useAnalytics';
import { ExampleData } from 'src/types/example';
import openPopUp from './PopUp';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    '&:hover': {
      filter: 'brightness(85%)',
    },
    border: `1px solid ${COLOR__DARK_GREY}`,
  },
}));

interface Props {
  data: ExampleData;
}

const Example: FC<Props> = ({ data }) => {
  const [t] = useTranslation();
  const classes = useStyles();
  const { sendEvent: sendAnalyticEvent } = useAnalytics();
  const { id, imgPath, nameKey } = data;

  const handleClick = useCallback(() => {
    sendAnalyticEvent({
      category: 'MyProjects',
      action: `${id} clicked`,
      label: id,
    });

    // open popup with additional info
    openPopUp({ data }).catch(() => {
      // on cancel do nothing
    });
  }, [data, id, sendAnalyticEvent]);

  return (
    <ButtonBase onClick={handleClick}>
      <img src={imgPath} alt={t(nameKey)} className={classes.img} />
    </ButtonBase>
  );
};

export default memo(Example);
