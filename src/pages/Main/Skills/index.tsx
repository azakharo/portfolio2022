import React, { FC, memo } from 'react';
import { Box, Container } from '@material-ui/core';
import Progress from './Progress';

const skills = [
  {
    name: 'Javascript, ES6, 7, 8... Babel, Webpack',
    value: 90,
  },
  {
    name: 'React.js, Redux, redux-thunk, redux-saga',
    value: 85,
  },
  {
    name: 'Vue, vuex',
    value: 65,
  },
  {
    name: 'AngularJS',
    value: 75,
  },
  {
    name: 'HTML, Pug',
    value: 80,
  },
  {
    name: 'CSS, Less, PostCSS',
    value: 80,
  },
  {
    name: 'Responsive layout, Flexbox, CSS Grid',
    value: 85,
  },
  {
    name: 'Node.js, Express.js, MongoDB',
    value: 75,
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
