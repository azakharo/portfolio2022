import merge from 'lodash/merge';
import {
  colors,
  createTheme,
  responsiveFontSizes,
  Theme,
} from '@material-ui/core';

import { THEMES } from './constants';
import { softShadows, strongShadows } from './shadows';
import typography from './typography';

const SPACING = 5; // px

const COLOR__BRAND_NORMAL = '#6e46ff';
const COLOR__BRAND_SECONDARY = '#ffe60a';

// const COLOR__ACCENT = undefined;
// const colorAccent = COLOR__ACCENT || COLOR__BRAND_NORMAL;
const COLOR__TEXT_PRIMARY = '#2c2a33';
export const COLOR__LIGHT_GREY = '#f1f0f2';
export const COLOR__DARK_GREY = '#e2e1e7';

const darkThemeBrandNormalColor = COLOR__BRAND_NORMAL;
const darkThemeAccentColor = darkThemeBrandNormalColor;

const inputFocusedColor = '#000';
const inputFocusedColorForDarkTheme = '#fff';

// For some themes red color is specified as a brand color.
// That brand color is also used as a border color for focused inputs.
// But red color is also used for v8n error message => focused color vs v8n color.
// In such situations there is a possibility to specify a custom focused color for
// both: the light and dark themes.
const getFormInputFocusOverrides = (borderColor: string) => {
  if (!borderColor) {
    // eslint-disable-next-line unicorn/no-useless-undefined
    return undefined;
  }

  return {
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: borderColor,
        },
      },
    },
  };
};

const baseOptions = {
  spacing: SPACING,
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiLink: {
      root: {
        color: COLOR__TEXT_PRIMARY,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)',
      },
    },
    // This affects only table's header
    MuiTableCell: {
      root: {
        padding: 16,
      },
    },
    MuiCard: {
      root: {
        overflow: 'auto',
      },
    },
    /// //////////////////////////////////////////////////////////////
    // Customize dialogs
    MuiDialogTitle: {
      root: {
        padding: `${5 * SPACING}px ${5 * SPACING}px ${3 * SPACING}px`,
        fontWeight: 700,
        fontSize: 20,
      },
    },
    MuiDialogContent: {
      root: {
        padding: `${2 * SPACING}px ${5 * SPACING}px`,
      },
    },
    MuiDialogActions: {
      root: {
        padding: `${2 * SPACING}px ${5 * SPACING}px ${5 * SPACING}px`,
      },
    },
    // Customize dialogs
    /// //////////////////////////////////////////////////////////////
  },
  props: {
    MuiInput: {
      color: inputFocusedColor ? undefined : 'secondary',
    },
    MuiTextField: {
      color: inputFocusedColor ? undefined : 'secondary',
      variant: 'outlined',
      size: 'small',
    },
    MuiLink: {
      color: 'secondary',
    },
    /// //////////////////////////////////////////////////////////////
    // Customize dialogs
    MuiDialogTitle: {
      // remove default h2 typography
      disableTypography: true,
    },
    MuiDialogActions: {
      // remove default spacing - see GlobalStyles for the spacing
      disableSpacing: true,
    },
    // Customize dialogs
    /// //////////////////////////////////////////////////////////////
  },
};

const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
      ...getFormInputFocusOverrides(inputFocusedColor),
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: '#ffffff',
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      primary: {
        main: COLOR__BRAND_NORMAL,
        contrastText: COLOR__TEXT_PRIMARY,
      },
      secondary: {
        main: COLOR__BRAND_SECONDARY,
        contrastText: colors.common.white,
      },
      error: {
        main: '#ff5a56',
      },
      // Not specified in Figma
      // warning: {
      //   main: '#ff5a56',
      // },
      info: {
        main: '#c6d2ff',
      },
      success: {
        main: '#31c838',
      },
      text: {
        primary: COLOR__TEXT_PRIMARY,
        secondary: '#6f6b7c',
      },
    },
    shadows: softShadows,
  },
  {
    name: THEMES.DARK,
    overrides: {
      ...getFormInputFocusOverrides(inputFocusedColorForDarkTheme),
    },
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34',
      },
      primary: {
        main: darkThemeBrandNormalColor,
        contrastText: '#fff',
      },
      secondary: {
        main: darkThemeAccentColor,
        contrastText: '#000',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
      },
    },
    shadows: strongShadows,
  },
];

export interface ThemeConfig {
  direction?: 'ltr' | 'rtl';
  responsiveFontSizes?: boolean;
  theme?: THEMES;
}

export const createAppTheme = (config: ThemeConfig): Theme => {
  const themeOptions = themesOptions.find(theme => theme.name === config.theme);

  let theme = createTheme(
    /* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-unsafe-call */
    // @ts-ignore
    merge({}, baseOptions, themeOptions, { direction: config.direction }),
    /* eslint-enable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-unsafe-call */
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
