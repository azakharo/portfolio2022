import React, { FC, memo } from 'react';
import { Box, Container } from '@material-ui/core';
import Progress from './Progress';

const skills = [
  {
    name: 'HTML',
    value: 85,
  },
  {
    name: 'CSS, PostCSS, preprocessors',
    value: 80,
  },
  {
    name: 'Javascript, including latest features',
    value: 90,
  },
  {
    name: 'Typescript',
    value: 70,
  },
  {
    name: 'React.js',
    value: 90,
  },
  {
    name: 'Redux, redux-thunk, redux-saga',
    value: 80,
  },
  {
    name: 'Build tools: Webpack, Babel, ESLint, etc.',
    value: 85,
  },
  {
    name: 'Testing: unit, integration, E2E',
    value: 80,
  },
  {
    name: 'Responsive layout, Flexbox, CSS Grid',
    value: 85,
  },
  {
    name: 'Server-side: Node.js, Express.js, MongoDB',
    value: 70,
  },
];

const Skills: FC = () => (
  // This component repeats the layout of the About comp.
  <Container maxWidth="lg">
    <Box display="flex" p={4} gridGap={40}>
      <Box flex={1} />
      <Box flex={2}>
        {skills.map(({ name, value }) => (
          <Box key={name} mb={2}>
            <Progress label={name} value={value} />
          </Box>
        ))}
      </Box>
    </Box>
  </Container>
);
export default memo(Skills);
