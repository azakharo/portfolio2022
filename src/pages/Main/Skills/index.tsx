import React, { FC, memo } from 'react';
import { Box, Container } from '@material-ui/core';
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

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import Progress from './Progress';

const skills = [
  {
    name: 'HTML',
    value: 85,
    icon: <FaHtml5 color="orange" />,
  },
  {
    name: 'CSS, PostCSS, preprocessors',
    value: 80,
    icon: <FaCss3Alt color="blue" />,
  },
  {
    name: 'Javascript, including latest features',
    value: 90,
    icon: <FaJsSquare />,
  },
  {
    name: 'Typescript',
    value: 70,
    icon: <SiTypescript />,
  },
  {
    name: 'React.js',
    value: 90,
    icon: <FaReact color="#5dd3f3" />,
  },
  {
    name: 'Redux, redux-thunk, redux-saga',
    value: 80,
    icon: <SiRedux color="#7248b6" />,
  },
  {
    name: 'Build tools: Webpack, Babel, ESLint, etc.',
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
    value: 80,
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
  const isSingleColumn = useIsSingleColumnMode();

  return (
    // This component repeats the layout of the About comp.
    <Container maxWidth="lg">
      <Box display="flex" p={4} gridGap={40}>
        {!isSingleColumn && <Box flex={1} />}
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
