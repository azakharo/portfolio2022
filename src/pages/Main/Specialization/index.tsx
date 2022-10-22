import React, { FC, memo } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { Trans, useTranslation } from 'react-i18next';
import { FaNodeJs, FaReact, FaUniversity } from 'react-icons/fa';

import { resumeUrl } from 'src/config';
import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import Card from './Card';

const iconSize = '2rem';
const specializations = [
  {
    title: 'Frontend',
    icon: <FaReact color="#5dd3f3" size={iconSize} />,
    textKey: 'specialization__frontendCard__text',
  },
  {
    title: 'Backend',
    icon: <FaNodeJs color="green" size={iconSize} />,
    textKey: 'specialization__backendCard__text',
    backgroundColor: '#f0f5ff',
  },
  {
    titleKey: 'specialization__miscCard__title',
    icon: <FaUniversity color="purple" size={iconSize} />,
    textKey: 'specialization__miscCard__text',
  },
];

const useStyles = makeStyles(theme => ({
  rootContainer: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const Specialization: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  return (
    <Container maxWidth="lg" className={classes.rootContainer}>
      <Box
        display={isSingleColumn ? undefined : 'flex'}
        p={4}
        gridGap={40}
        py={6}
        pl={2}
        pr={6}
      >
        <Box flex={1} textAlign="left" py={2} px={2}>
          <Typography variant="h2" color="textPrimary">
            {t('specialization__title')}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Trans
              i18nKey="specialization__subTitle"
              components={{
                a: (
                  // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label
                  <a target="_blank" href={resumeUrl} rel="noreferrer" />
                ),
              }}
            />
          </Typography>
        </Box>

        <Box flex={2} display="flex" flexWrap="wrap">
          {specializations.map(
            ({ title, titleKey, icon, textKey, backgroundColor }) => (
              <Card
                key={title || titleKey}
                title={title}
                titleKey={titleKey}
                icon={icon}
                textKey={textKey}
                backgroundColor={backgroundColor}
              />
            ),
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Specialization);
