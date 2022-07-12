const KEY__PAGE_HAS_BEEN_FORCE_REFRESHED = 'page-has-been-force-refreshed';

//-------------------------------------------------------------------
// Common helpers

// Any serializable data can be passed here
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const saveData = (data: any, key: string): void => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // Log error, nothing more
    /* eslint-disable-next-line  no-console */
    console.error(err);
  }
};

// Retrieve and de-serializes data.
// Returns undefined on any error.
// Any serializable data can be returned from here
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const loadData = (key: string): any => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // Log error and return nothing
    // eslint-disable-next-line no-console
    console.error(err);
    return undefined;
  }
};

/// //////////////////////////////////////////////////////////////////
// Has this page been already force-refreshed?

export const hasPageBeenForceRefreshed = (): boolean =>
  (loadData(KEY__PAGE_HAS_BEEN_FORCE_REFRESHED) as boolean) || false;

export const setPageHasBeenForceRefreshed = (status: boolean): void =>
  saveData(status, KEY__PAGE_HAS_BEEN_FORCE_REFRESHED);
