import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './i18n';
import { SettingsProvider } from './contexts/SettingsContext';
import BounceLoading from './components/BounceLoading';

ReactDOM.render(
  <SettingsProvider>
    <Suspense fallback={<BounceLoading />}>
      <App />
    </Suspense>
  </SettingsProvider>,
  // eslint-disable-next-line unicorn/prefer-query-selector
  document.getElementById('root'),
);
