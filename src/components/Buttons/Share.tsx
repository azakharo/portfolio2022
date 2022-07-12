import React, { FC, memo, useCallback } from 'react';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { BsFillReplyFill as ShareIcon } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

import openShareDialog from '../Dialogs/Share';

interface Props {
  title: string;
  sharedPageUrl: string;
  // Use this prop to fully override the button's behavior.
  // The default behavior is to open the share dialog on click.
  onClick?: (() => Promise<void>) | (() => void);
  isLoading?: boolean;
  // You can do something additionally before the dialog with
  // the social media buttons is opened.
  // This method is used ONLY if the onClick prop is NOT specified.
  onBeforeOpenShareDialog?: (() => Promise<void>) | (() => void);
}

const ShareButton: FC<Props> = ({
  title,
  sharedPageUrl,
  onClick,
  isLoading,
  onBeforeOpenShareDialog,
}) => {
  const [t] = useTranslation();

  const handleOpen = useCallback(async () => {
    if (onBeforeOpenShareDialog) {
      await onBeforeOpenShareDialog();
    }

    try {
      await openShareDialog({
        sharedPageUrl,
        title,
      });
    } catch (e) {
      // ignore the cancellation
    }
  }, [sharedPageUrl, title, onBeforeOpenShareDialog]);

  return (
    <>
      <Button
        startIcon={
          isLoading ? (
            <CircularProgress color="primary" size={16} />
          ) : (
            <ShareIcon />
          )
        }
        onClick={onClick || handleOpen}
        disabled={isLoading}
      >
        <Typography variant="subtitle1">
          {t('dashboard:activityStream__shareButton__text')}
        </Typography>
      </Button>
    </>
  );
};

export default memo(ShareButton);
