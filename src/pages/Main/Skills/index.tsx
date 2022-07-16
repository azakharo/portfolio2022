import React, { FC, memo } from 'react';
import { Box, Container, LinearProgress, makeStyles } from '@material-ui/core';

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

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Skills: FC = () => {
  const classes = useStyles();

  // This component repeats the layout of the About comp.
  return (
    <Container maxWidth="lg">
      <Box display="flex" p={4} gridGap={40}>
        <Box flex={1} />
        <Box flex={2}>
          {skills.map(({ name, value }) => (
            <Box key={name} mb={2}>
              <Box mb={1} display="flex" justifyContent="space-between">
                <span>{name}</span>
                <span>{value}%</span>
              </Box>
              <LinearProgress
                variant="determinate"
                color="secondary"
                value={value}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Skills);
