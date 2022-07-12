import React, { FC, memo, useCallback, useState } from 'react';
import { colors, makeStyles, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  likedButtonIcon: {
    color: colors.red[600],
  },
}));

interface Props {
  initialValue: boolean;
  onLike?: (value: boolean) => void;
  onUnlike?: (value: boolean) => void;
}

const LikeButton: FC<Props> = ({ initialValue, onLike, onUnlike }) => {
  const [t] = useTranslation();
  const classes = useStyles();

  const likeButtonText = t('dashboard:activityStream__likeButton__text');
  const [isLiked, setLiked] = useState<boolean>(initialValue);

  const handleLike = useCallback((): void => {
    setLiked(true);
    if (onLike) {
      onLike(true);
    }
  }, [onLike]);

  const handleUnlike = useCallback((): void => {
    setLiked(false);
    if (onUnlike) {
      onUnlike(false);
    }
  }, [onUnlike]);

  return isLiked ? (
    <Button
      onClick={handleUnlike}
      startIcon={<FavoriteIcon className={classes.likedButtonIcon} />}
    >
      {likeButtonText}
    </Button>
  ) : (
    <Button onClick={handleLike} startIcon={<FavoriteBorderIcon />}>
      {likeButtonText}
    </Button>
  );
};

export default memo(LikeButton);
