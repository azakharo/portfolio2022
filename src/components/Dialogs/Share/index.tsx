import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogContent,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import React, { useMemo, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { create, InstanceProps } from 'react-modal-promise';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
} from 'react-share';

import DialogTitle from 'src/components/Dialogs/DialogTitle';
import { DefaultResolveFuncType } from 'src/components/Dialogs/types';

const useStyles = makeStyles(() => ({
  input: {
    width: '100%',
  },
  tabs: {
    indicator: {
      display: 'none',
    },
  },
}));

const BUTTON_ICON_SIZE = 70; // px

const hashtag = '#novakid';
const novakidImageUrl = 'https://www.novakidschool.com/i/hero_img.png';

const buttonIconCommonProps = {
  size: BUTTON_ICON_SIZE,
  round: true,
};

interface Props extends InstanceProps<DefaultResolveFuncType> {
  title: string;
  sharedPageUrl: string;
}

const Share: FC<Props> = ({ sharedPageUrl, title, onResolve, onReject }) => {
  const [t] = useTranslation();
  const classes = useStyles();

  const commonButtonProps = useMemo(
    () => ({
      url: sharedPageUrl,
      onShareWindowClose: onResolve,
    }),
    [sharedPageUrl, onResolve],
  );

  const handleClose = useCallback(() => {
    onReject();
  }, [onReject]);

  return (
    <MuiDialog open onClose={handleClose}>
      <DialogTitle
        titleKey="dashboard:activityStream__shareButton__text"
        onClose={handleClose}
      />
      <DialogContent>
        {/* List of share buttons */}
        <div>
          <FacebookShareButton
            {...commonButtonProps}
            quote={title}
            hashtag={hashtag}
          >
            <FacebookIcon {...buttonIconCommonProps} />
          </FacebookShareButton>

          <TwitterShareButton {...commonButtonProps} title={title}>
            <TwitterIcon {...buttonIconCommonProps} />
          </TwitterShareButton>

          <TelegramShareButton {...commonButtonProps} title={title}>
            <TelegramIcon {...buttonIconCommonProps} />
          </TelegramShareButton>

          <WhatsappShareButton
            {...commonButtonProps}
            title={title}
            separator=":: "
          >
            <WhatsappIcon {...buttonIconCommonProps} />
          </WhatsappShareButton>

          <LinkedinShareButton {...commonButtonProps}>
            <LinkedinIcon {...buttonIconCommonProps} />
          </LinkedinShareButton>

          <PinterestShareButton
            {...commonButtonProps}
            media={novakidImageUrl}
            description={title}
          >
            <PinterestIcon {...buttonIconCommonProps} />
          </PinterestShareButton>

          <VKShareButton
            {...commonButtonProps}
            title={title}
            image={novakidImageUrl}
          >
            <VKIcon {...buttonIconCommonProps} />
          </VKShareButton>

          <OKShareButton {...commonButtonProps} image={novakidImageUrl}>
            <OKIcon {...buttonIconCommonProps} />
          </OKShareButton>

          <RedditShareButton {...commonButtonProps} title={title}>
            <RedditIcon {...buttonIconCommonProps} />
          </RedditShareButton>

          <TumblrShareButton {...commonButtonProps} title={title}>
            <TumblrIcon {...buttonIconCommonProps} />
          </TumblrShareButton>

          <LivejournalShareButton {...commonButtonProps} title={title}>
            <LivejournalIcon {...buttonIconCommonProps} />
          </LivejournalShareButton>

          <MailruShareButton {...commonButtonProps} title={title}>
            <MailruIcon {...buttonIconCommonProps} />
          </MailruShareButton>

          <EmailShareButton
            {...commonButtonProps}
            subject={title}
            body={sharedPageUrl}
          >
            <EmailIcon {...buttonIconCommonProps} />
          </EmailShareButton>

          <ViberShareButton {...commonButtonProps} title={title}>
            <ViberIcon {...buttonIconCommonProps} />
          </ViberShareButton>

          <WorkplaceShareButton {...commonButtonProps} quote={title}>
            <WorkplaceIcon {...buttonIconCommonProps} />
          </WorkplaceShareButton>

          <LineShareButton {...commonButtonProps} title={title}>
            <LineIcon {...buttonIconCommonProps} />
          </LineShareButton>

          <WeiboShareButton
            {...commonButtonProps}
            title={title}
            image={novakidImageUrl}
          >
            <WeiboIcon {...buttonIconCommonProps} />
          </WeiboShareButton>

          <PocketShareButton {...commonButtonProps} title={title}>
            <PocketIcon {...buttonIconCommonProps} />
          </PocketShareButton>

          <InstapaperShareButton {...commonButtonProps} title={title}>
            <InstapaperIcon {...buttonIconCommonProps} />
          </InstapaperShareButton>

          <HatenaShareButton {...commonButtonProps} title={title}>
            <HatenaIcon {...buttonIconCommonProps} />
          </HatenaShareButton>
        </div>

        {/* Copy the link to the clipboard */}
        <Box mt={5} mb={5}>
          <OutlinedInput
            className={classes.input}
            value={sharedPageUrl}
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained" disableElevation>
                  {t('buttonText__copy')}
                </Button>
              </InputAdornment>
            }
          />
        </Box>
      </DialogContent>
    </MuiDialog>
  );
};

export default create(Share);
