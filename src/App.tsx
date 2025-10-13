import React, { FC, memo, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import ModalContainer from 'react-modal-promise';

import Routes from 'src/routes/RoutesComponent';
import history from 'src/utils/history';
import GlobalStyles from 'src/components/GlobalStyles';
import { useAnalytics } from 'src/hooks/useAnalytics';
import ErrorBoundary from './ErrorBoundary';
import { createAppTheme } from './theme';
import useSettings from './hooks/useSettings';
import './font.css';
import '@splidejs/react-splide/dist/css/themes/splide-default.min.css';

const App: FC = () => {
  const { settings } = useSettings();
  const { init: initAnalytics } = useAnalytics();

  const theme = createAppTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });

  // Run once on application start
  useEffect(() => {
    const appVersion = process.env.REACT_APP_VERSION;

    if (process.env.NODE_ENV === 'production') {
      // Show application version
      // eslint-disable-next-line no-console
      console.log(`version: ${appVersion as string}`);
    }

    initAnalytics();

    // really need to run it once on startup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // IMPORTANT!
  // If you add/remove any provider here, please update the provider list
  // in src/testUtils/index.tsx
  // Try to use the same order of the providers.
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <ErrorBoundary>
          <GlobalStyles />
          <Routes />
          <ModalContainer />
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default memo(App);
