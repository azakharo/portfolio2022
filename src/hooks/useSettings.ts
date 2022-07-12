import { useContext } from 'react';
import SettingsContext from 'src/contexts/SettingsContext';
import { ThemeConfig } from 'src/theme';

// TODO Create Interface
const useSettings = (): {
  settings: ThemeConfig;
  saveSettings: (newSettings: ThemeConfig) => void;
} =>
  useContext<{ settings: ThemeConfig; saveSettings: () => void }>(
    SettingsContext,
  );

export default useSettings;
