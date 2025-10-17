import React, { FC, memo } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TableContainer,
  TableCell,
  TableHead,
  Table,
  TableBody,
  TableRow,
  Chip,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useIsSingleColumnMode from 'src/hooks/useIsSingleColumnMode';
import { useStyles } from 'src/pages/ExamplePage/index';

interface StackRow {
  area: string;
  tools: string[];
}

const myStack: StackRow[] = [
  {
    area: 'Main language',
    tools: ['Typescript', 'Javascript'],
  },
  {
    area: 'Framework',
    tools: ['React.js'],
  },
  {
    area: 'UI Toolkit',
    tools: ['MUI', 'AntD', 'Storybook'],
  },
  {
    area: 'State management',
    tools: ['Context API', 'TanStack Query', 'Zustand', 'Redux'],
  },
  {
    area: 'Architecture',
    tools: ['FSD', 'modules'],
  },
  {
    area: 'Styles',
    tools: ['css-in-js', 'sass', 'css-modules'],
  },
  {
    area: 'i18n',
    tools: ['i18next'],
  },
  {
    area: 'Build',
    tools: ['vite'],
  },
  {
    area: 'Testing',
    tools: ['vitest', 'react-testing-library', 'Puppeteer'],
  },
  {
    area: 'Forms',
    tools: ['react-hook-form', 'yup'],
  },
  {
    area: 'Datetime',
    tools: ['date-fns'],
  },
  {
    area: 'Linting, formatting',
    tools: ['eslint', 'prettier'],
  },
  {
    area: 'Data fetching',
    tools: ['axios'],
  },
  {
    area: 'SSR/SSG',
    tools: ['Next.js', 'Astro'],
  },
];

const MyStack: FC = () => {
  const [t] = useTranslation();
  const isSingleColumn = useIsSingleColumnMode();
  const chipClasses = useStyles();

  return (
    <Container maxWidth="lg">
      <Box
        display={isSingleColumn ? undefined : 'flex'}
        p={4}
        gridGap={40}
        py={6}
        pl={2}
        pr={6}
      >
        <Box flex={1} textAlign="left" py={2} px={2}>
          <Typography variant="h3" color="textPrimary">
            {t('myStack__title')}
          </Typography>
        </Box>

        <Box flex={2} display="flex" flexWrap="wrap">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('myStack__area')}</TableCell>
                  <TableCell>{t('myStack__tools')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myStack.map(({ area, tools }) => (
                  <TableRow>
                    <TableCell>{area}</TableCell>

                    <TableCell>
                      <Box display="flex" gridGap={10}>
                        {tools.map(tool => (
                          <Chip
                            key={tool}
                            label={tool}
                            className={chipClasses.tag}
                          />
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(MyStack);
