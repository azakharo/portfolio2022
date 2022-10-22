import React, { FC, memo } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { SECTION__CONTACTS } from 'src/pages/Main/sectionIds';
import { email, location, phone, resumeUrl } from 'src/config';
import { getDesktopMediaQuery, useIsDesktop } from 'src/hooks/responsive';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fafafa',

    '& > div': {
      marginRight: theme.spacing(10),
      marginBottom: theme.spacing(4),

      [getDesktopMediaQuery(theme)]: {
        marginBottom: theme.spacing(0),
      },
    },
  },
}));

const Contacts: FC = () => {
  const [t] = useTranslation();
  const classes = useStyles();
  const isDesktop = useIsDesktop();

  return (
    <Box
      id={SECTION__CONTACTS}
      className={classes.root}
      py={3}
      px={4}
      display="flex"
      justifyContent={isDesktop ? 'center' : undefined}
      alignItems="center"
      flexWrap="wrap"
    >
      {/* Title */}
      <Box>
        <Typography variant="h2">{t('contacts__title')}</Typography>
        <Box textAlign="right">
          <Typography variant="h5" color="textSecondary">
            {t('contacts__subTitle')}
          </Typography>
        </Box>
      </Box>

      {/* Location */}
      <Box>
        <Typography variant="h5">{t('contacts__location__label')}</Typography>
        <Typography variant="subtitle1">
          <a target="_blank" href={location} rel="noreferrer">
            {t('contacts__location__value')}
          </a>
        </Typography>
      </Box>

      {/* Phone */}
      <Box>
        <Typography variant="h5">{t('contacts__phone__label')}</Typography>
        <Typography variant="subtitle1">
          <a target="_blank" href={`tel:${phone}`} rel="noreferrer">
            {phone}
          </a>
        </Typography>
      </Box>

      {/* Email */}
      <Box>
        <Typography variant="h5">{t('contacts__email__label')}</Typography>
        <Typography variant="subtitle1">
          <a target="_blank" href={`mailto:${email}`} rel="noreferrer">
            {email}
          </a>
        </Typography>
      </Box>

      {/* Resume */}
      <Box>
        <Typography variant="h5">{t('contacts__resume__label')}</Typography>
        <Typography variant="subtitle1">
          <a target="_blank" href={resumeUrl} rel="noreferrer">
            hh.ru
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(Contacts);
