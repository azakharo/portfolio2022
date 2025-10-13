import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Chip,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { examples } from 'src/pages/Main/Examples/config';
import { Trans, useTranslation } from 'react-i18next';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import capitalize from 'lodash/capitalize';
import { useIsMobile } from 'src/hooks/responsive';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: 10,
  },
  rightSide: {
    '& > p': {
      marginBottom: theme.spacing(1),
    },
  },
  tagsContainer: {
    '& > div': {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  tag: {
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  nowrap: {
    whiteSpace: 'nowrap',
  },
}));

export const ExamplePage: FC = () => {
  const [t] = useTranslation();
  const history = useHistory();
  const isMobile = useIsMobile();
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const example = examples.find(ex => ex.id === id);

  if (!example) {
    return null;
  }

  const { nameKey, descKey, imgPath, year, customer, customerKey, tags, urls } =
    example;

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
        bgcolor="#00000013"
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

      <Box
        display={isMobile ? 'block' : 'flex'}
        mb={4}
        gridGap={20}
        px={4}
        py={4}
      >
        <img
          style={{
            height: isMobile ? 'auto' : '30vh',
            width: isMobile ? '100%' : 'auto',
            marginBottom: isMobile ? '10px' : undefined,
          }}
          src={imgPath}
          alt={t(nameKey)}
          className={classes.img}
        />

        <Box flex={1} className={classes.rightSide}>
          <Typography variant="body1">
            <Trans i18nKey={descKey} />
          </Typography>
          <Typography variant="body1">
            <strong>{capitalize(t('year'))}:</strong> {year}
          </Typography>
          <Typography variant="body1">
            <strong>{capitalize(t('customer'))}:</strong>{' '}
            {customerKey ? t(customerKey) : customer || ''}
          </Typography>

          {/* tags */}
          <Box mb={2} className={classes.tagsContainer}>
            {tags.map(tag => (
              <Chip key={tag} label={tag} className={classes.tag} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* demo image carousel */}
      <Box p={4} bgcolor="#00000005">
        <Splide aria-label="My Favorite Images">
          {urls.map(url => (
            <SplideSlide key={url}>
              <Box display="flex" justifyContent="center">
                <img
                  src={url}
                  alt=""
                  style={{
                    height: '45vh',
                    width: 'auto',
                  }}
                />
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </>
  );
};
