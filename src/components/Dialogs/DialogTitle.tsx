import React, { FC, memo } from 'react';
import {
  Box,
  DialogTitle as MuiDialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DialogTitleProps } from '@material-ui/core/DialogTitle/DialogTitle';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@material-ui/icons/Close';

import { getLabel } from 'src/i18n/utils';
import { Variant } from '@material-ui/core/styles/createTypography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

interface Props extends DialogTitleProps {
  titleKey?: string;
  title?: string;
  titleVariant?: Variant;
  titleClassName?: string;
  onClose?: () => void; // if specified, the close button is displayed
}

const DialogTitle: FC<Props> = ({
  titleVariant = 'h5',
  titleClassName,
  title,
  titleKey,
  onClose,
  ...restProps
}) => {
  const [t] = useTranslation();
  const classes = useStyles();

  return (
    <MuiDialogTitle className={classes.root} {...restProps}>
      <Box flex={1} pr={8}>
        <Typography variant={titleVariant} className={titleClassName}>
          {getLabel(t, titleKey, title)}
        </Typography>
      </Box>
      {onClose && (
        <IconButton
          size="small"
          className={classes.closeButton}
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

export default memo(DialogTitle);
