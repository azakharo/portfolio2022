import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Box, IconButton, Typography } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { examples } from 'src/pages/Main/Examples/config';
import { useTranslation } from 'react-i18next';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

export const ExamplePage: FC = () => {
  const [t] = useTranslation();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const example = examples.find(ex => ex.id === id);

  if (!example) {
    return null;
  }

  const { nameKey } = example;

  return (
    <>
      <Helmet>
        <title>azakharov</title>
      </Helmet>

      <Box
        component="header"
        display="flex"
        alignItems="center"
        px={2}
        py={1}
        bgcolor="#F6F6F6"
      >
        <IconButton
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowBackOutlinedIcon style={{ color: '#000' }} />
        </IconButton>

        <Typography variant="h4">{t(nameKey)}</Typography>
      </Box>
    </>
  );
};
