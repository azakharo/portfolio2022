import React, { FC, memo } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiBabel,
  SiEslint,
  SiJest,
  SiRedux,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import { RiLayoutMasonryLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import Progress from './Progress';

const skills = [
  {
    name: 'HTML',
    value: 80,
    icon: <FaHtml5 color="orange" />,
  },
  {
    name: 'CSS, PostCSS, SASS',
    value: 85,
    icon: <FaCss3Alt color="blue" />,
  },
  {
    name: 'Javascript',
    value: 90,
    icon: <FaJsSquare />,
  },
  {
    name: 'Typescript',
    value: 80,
    icon: <SiTypescript />,
  },
  {
    name: 'React.js',
    value: 90,
    icon: <FaReact color="#5dd3f3" />,
  },
  {
    name: 'Redux, redux-thunk, redux-saga, zustand',
    value: 80,
    icon: <SiRedux color="#7248b6" />,
  },
  {
    name: 'Build tools: Webpack, Babel, ESLint, Prettier, Vite',
    value: 85,
    icon: (
      <>
        <SiWebpack color="blue" />
        <SiBabel />
        <SiEslint color="blue" />
      </>
    ),
  },
  {
    name: 'Testing: unit, integration, E2E',
    value: 75,
    icon: <SiJest color="#94404d" />,
  },
  {
    name: 'Responsive layout, Flexbox, CSS Grid',
    value: 85,
    icon: <RiLayoutMasonryLine />,
  },
  {
    name: 'Server-side: Node.js, Express.js, MongoDB',
    value: 70,
    icon: <FaNodeJs color="green" />,
  },
];

const Skills: FC = () => {
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();

  return (
    <Container maxWidth="lg">
      <Box display={isSingleColumn ? undefined : 'flex'} p={4} gridGap={40}>
        {/* Left part */}
        <Box flex={1} textAlign="left" py={2} px={2}>
          {/* Title */}
          <Typography variant="h5" color="textSecondary">
            {t('skills__subTitle')}
          </Typography>
        </Box>

        {/* Right part */}
        <Box flex={2}>
          {skills.map(({ name, value, icon }) => (
            <Box key={name} mb={2}>
              <Progress label={name} value={value} icon={icon} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
export default memo(Skills);
