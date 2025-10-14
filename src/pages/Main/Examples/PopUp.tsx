import capitalize from 'lodash/capitalize';
import React, { FC, memo, useCallback } from 'react';
import {
  DialogContent,
  Dialog,
  Box,
  makeStyles,
  Typography,
  Chip,
} from '@material-ui/core';
import { Trans, useTranslation } from 'react-i18next';
import { create, InstanceProps } from 'react-modal-promise';

import { DefaultResolveFuncType } from 'src/components/Dialogs/types';
import DialogTitle from 'src/components/Dialogs/DialogTitle';
import { useIsMobile } from 'src/hooks/responsive';
import { ExampleData } from 'src/types/example';

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
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

interface Props extends InstanceProps<DefaultResolveFuncType> {
  data: ExampleData;
}

const PopUp: FC<Props> = ({ data, onReject }) => {
  const [t] = useTranslation();
  const classes = useStyles();
  const isMobile = useIsMobile();
  const {
    nameKey,
    descKey,
    imgPath,
    year,
    customer,
    customerKey,
    tags,
    demoImageUrls,
  } = data;

  const handleClose = useCallback(() => {
    onReject();
  }, [onReject]);

  return (
    <Dialog open onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle title={t(nameKey)} onClose={handleClose} />

      <DialogContent>
        <Box display={isMobile ? 'block' : 'flex'} mb={4} gridGap={20}>
          <Box flex={1}>
            <img src={imgPath} alt={t(nameKey)} className={classes.img} />
          </Box>

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

            {/* demo links */}
            <Box display="flex" gridGap={10} mt={2} flexWrap="wrap">
              {demoImageUrls?.map((url, urlInd) => (
                <Typography variant="subtitle1" key={url}>
                  <a
                    target="_blank"
                    href={url}
                    rel="noreferrer"
                    className={classes.nowrap}
                  >
                    {t('examplePopUp__demoLabel')} {urlInd + 1}
                  </a>
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* tags */}
        <Box mb={2} className={classes.tagsContainer}>
          {tags.map(tag => (
            <Chip key={tag} label={tag} className={classes.tag} />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default create(memo(PopUp));
