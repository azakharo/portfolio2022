import { lazy } from 'react';

import {
  hasPageBeenForceRefreshed,
  setPageHasBeenForceRefreshed,
} from 'src/utils/localStorage';

// This is necessary for task NPA-455
// The solution is shown here:
// https://raphael-leger.medium.com/react-webpack-chunkloaderror-loading-chunk-x-failed-ac385bd110e0
const lazyWithRetry = componentImport =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = hasPageBeenForceRefreshed();

    try {
      const component = await componentImport();

      setPageHasBeenForceRefreshed(false);

      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Assuming that the user is not on the latest version of the application.
        // Let's refresh the page immediately.
        setPageHasBeenForceRefreshed(true);
        return window.location.reload();
      }

      // The page has already been reloaded
      // Assuming that user is already using the latest version of the application.
      // Let's let the application crash and raise the error.
      throw error;
    }
  });

export default lazyWithRetry;
