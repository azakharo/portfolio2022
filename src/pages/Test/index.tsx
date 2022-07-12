import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box, Grid } from '@material-ui/core';

// This page is just for the experiments.
const Test: FC = () => (
  <>
    <Helmet>
      <title>Novakid - Test</title>
    </Helmet>
    <Container maxWidth="lg">
      {/* ============================================================= */}
      {/* Color test */}

      <Typography component="div" variant="body1">
        <Box color="primary.main">primary.main</Box>
        <Box color="secondary.main">secondary.main</Box>
        <Box color="error.main">error.main</Box>
        <Box color="warning.main">warning.main</Box>
        <Box color="info.main">info.main</Box>
        <Box color="success.main">success.main</Box>
        <Box color="text.primary">text.primary</Box>
        <Box color="text.secondary">text.secondary</Box>
        <Box color="text.disabled">text.disabled</Box>
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            primary.main
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
            secondary.main
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="error.main" color="error.contrastText" p={2}>
            error.main
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
            warning.main
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            info.main
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="success.main" color="success.contrastText" p={2}>
            success.main
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="text.primary" color="background.paper" p={2}>
            text.primary
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="text.secondary" color="background.paper" p={2}>
            text.secondary
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="text.disabled" color="background.paper" p={2}>
            text.disabled
          </Box>
        </Grid>
      </Grid>

      {/* Color test */}
      {/* ============================================================= */}

      {/* ///////////////////////////////////////////////////////////// */}
      {/* Typography test */}

      <Typography variant="h1" component="h2" gutterBottom>
        H1 Head
      </Typography>
      <Typography variant="h2" gutterBottom>
        H2 Headline
      </Typography>
      <Typography variant="h3" gutterBottom>
        H3 Headline
      </Typography>
      <Typography variant="h4" gutterBottom>
        H4 Headline
      </Typography>
      <Typography variant="h5" gutterBottom>
        H5 Headline
      </Typography>
      <Typography variant="h6" gutterBottom>
        H6 Headline
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        Button Text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>

      {/* Typography test */}
      {/* ///////////////////////////////////////////////////////////// */}
    </Container>
  </>
);

export default memo(Test);
