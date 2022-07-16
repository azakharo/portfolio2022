import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { ParallaxBanner } from 'react-scroll-parallax';

import portraitImage from 'src/assets/portrait.jpg';

const useStyles = makeStyles(() => ({
  imageContainer: {
    // Use "linear-gradient" to add darken background effect to the image. This will make the text easier to read
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${portraitImage}")`,
    // Set a specific height
    height: '50vh',

    // Position and center the image to scale nicely on all screens
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
}));

const Picture: FC = () => {
  const classes = useStyles();

  return (
    <ParallaxBanner
      layers={[
        {
          image: portraitImage,
          speed: -20,
          scale: [1.2, 1],
        },
      ]}
    >
      <div className={classes.imageContainer}>
        <div className={classes.text}>
          <h1>I am Alexey Zakharov</h1>
          <p>And I am a Programmer</p>
          <span>Hire me</span>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default memo(Picture);
