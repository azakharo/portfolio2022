import React, { FC, memo } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiJest, SiTypescript } from 'react-icons/si';
import { RiLayoutMasonryLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: 10,

    '& > div': {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  techLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  myNameIs: {
    fontSize: '1.7rem',
    color: theme.palette.warning.main,
  },
  iAmProgrammer: {
    color: theme.palette.warning.main,
  },
  rotateClockwise: {
    transform: 'rotate(7deg)',
  },
  rotateCounterClockwise: {
    transform: 'rotate(-7deg)',
  },
}));

interface Props {
  className?: string;
}

const TechGrid: FC<Props> = ({ className }) => {
  const [t] = useTranslation();
  const classes = useStyles();

  return (
    <div className={classNames(classes.grid, className)}>
      <div>
        <Typography
          variant="h4"
          className={classNames(
            classes.techLabel,
            classes.rotateCounterClockwise,
          )}
        >
          <FaJsSquare color="yellow" />
          Javascript
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(classes.techLabel, classes.rotateClockwise)}
        >
          <FaNodeJs color="green" /> Node
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(
            classes.techLabel,
            classes.rotateCounterClockwise,
          )}
        >
          <FaReact color="#5dd3f3" /> React
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(classes.techLabel, classes.rotateClockwise)}
        >
          <RiLayoutMasonryLine /> Responsive
        </Typography>
      </div>

      <div>
        <div>
          <Typography variant="h4" className={classes.myNameIs}>
            {t('picture__IAM')}
          </Typography>
          <Typography variant="button" className={classes.iAmProgrammer}>
            {t('picture__IamProgrammer')}
          </Typography>
        </div>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(classes.techLabel, classes.rotateClockwise)}
        >
          <SiTypescript color="yellow" /> Typescript
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(
            classes.techLabel,
            classes.rotateCounterClockwise,
          )}
        >
          <FaCss3Alt color="blue" /> CSS
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(classes.techLabel, classes.rotateClockwise)}
        >
          <SiJest color="#94404d" /> Testing
        </Typography>
      </div>

      <div>
        <Typography
          variant="h4"
          className={classNames(
            classes.techLabel,
            classes.rotateCounterClockwise,
          )}
        >
          <FaHtml5 color="orange" /> HTML
        </Typography>
      </div>
    </div>
  );
};

export default memo(TechGrid);
