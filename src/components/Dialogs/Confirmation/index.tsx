import React, { FC, ReactNode, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from '@material-ui/core';
import { create, InstanceProps } from 'react-modal-promise';
import { useTranslation } from 'react-i18next';

import { getLabel } from 'src/i18n/utils';
import { DefaultResolveFuncType } from 'src/components/Dialogs/types';
import DialogTitle from '../DialogTitle';

interface Props extends InstanceProps<DefaultResolveFuncType> {
  titleKey?: string;
  // user should specify either "text"/"textKey" prop or "content" prop
  text?: string;
  textKey?: string;
  content?: ReactNode;
  okButtonTextKey?: string;
  cancelButtonTextKey?: string;
}

const ConfirmationDialog: FC<Props> = ({
  isOpen,
  onResolve,
  onReject,
  titleKey,
  text,
  textKey,
  content,
  okButtonTextKey,
  cancelButtonTextKey,
}) => {
  const [t] = useTranslation();

  const handleCancel = useCallback(() => {
    onReject();
  }, [onReject]);

  const handleOk = useCallback(() => {
    onResolve();
  }, [onResolve]);

  return (
    <Dialog onClose={handleCancel} open={isOpen}>
      <DialogTitle
        onClose={handleCancel}
        titleKey={titleKey || 'confirmation__title__defaultText'}
      />
      <DialogContent>
        {content || (
          <Typography variant="body1">{getLabel(t, textKey, text)}</Typography>
        )}
      </DialogContent>
      <DialogActions disableSpacing>
        <Button onClick={handleCancel} variant="contained" disableElevation>
          {t(cancelButtonTextKey || 'buttonText__Cancel')}
        </Button>
        <Button
          onClick={handleOk}
          color="primary"
          variant="contained"
          disableElevation
        >
          {okButtonTextKey ? t(okButtonTextKey) : 'OK'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default create(ConfirmationDialog);
