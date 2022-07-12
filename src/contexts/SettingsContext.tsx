import merge from 'lodash/merge';
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { THEMES } from 'src/theme/constants';
import { ThemeConfig } from 'src/theme';

const defaultSettings: ThemeConfig = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: THEMES.LIGHT,
};

export const restoreSettings = (): ThemeConfig | null => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData) as ThemeConfig;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // If stored data is not a serialized JSON, then this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: ThemeConfig): void => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => {},
});

interface Props {
  settings?: ThemeConfig;
  children: ReactNode;
}

export const SettingsProvider: FC<Props> = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState<ThemeConfig>(
    settings || defaultSettings,
  );

  const handleSaveSettings = useCallback(
    (update = {}) => {
      // TODO add more type checking for the input param
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const mergedSettings = merge({}, currentSettings, update);

      setCurrentSettings(mergedSettings);
      storeSettings(mergedSettings);
    },
    [currentSettings, setCurrentSettings],
  );

  const contextValue = useMemo(
    () => ({
      settings: currentSettings,
      saveSettings: handleSaveSettings,
    }),
    [currentSettings, handleSaveSettings],
  );

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  useEffect(() => {
    document.body.dir = currentSettings.direction || 'ltr';
  }, [currentSettings]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
