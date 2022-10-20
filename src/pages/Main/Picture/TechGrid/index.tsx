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
import Item from './Item';

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
      <Item
        icon={<FaJsSquare color="yellow" />}
        label="Javascript"
        className={classes.rotateCounterClockwise}
      />

      <Item
        icon={<FaNodeJs color="green" />}
        label="Node"
        className={classes.rotateClockwise}
      />

      <Item
        icon={<FaReact color="#5dd3f3" />}
        label="React"
        className={classes.rotateCounterClockwise}
      />

      <Item
        icon={<RiLayoutMasonryLine />}
        label="Responsive"
        className={classes.rotateClockwise}
      />

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

      <Item
        icon={<SiTypescript color="yellow" />}
        label="Typescript"
        className={classes.rotateClockwise}
      />

      <Item
        icon={<FaCss3Alt color="blue" />}
        label="CSS"
        className={classes.rotateCounterClockwise}
      />

      <Item
        icon={<SiJest color="#94404d" />}
        label="Testing"
        className={classes.rotateClockwise}
      />

      <Item
        icon={<FaHtml5 color="orange" />}
        label="HTML"
        className={classes.rotateCounterClockwise}
      />
    </div>
  );
};

export default memo(TechGrid);
