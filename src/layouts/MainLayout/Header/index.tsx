import React, { ComponentType, FC, memo, useCallback } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Button,
  Divider,
  Box,
  useTheme,
  Link,
} from '@material-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

import CurrentLanguageSelect from 'src/components/Selects/CurrentLanguage';
import HideOnScrollDown from 'src/components/HideOnScrollDown';
import { ROUTE__TEST } from 'src/routes/routes';
import { EXTERNAL_URL__HOME } from 'src/routes/externalUrls';
import useMediaQueryPatched from 'src/hooks/useMediaQueryPatched';
import { getLogoImg } from 'src/components/logo';

interface UiSection {
  labelKey: string;
  route?: string;
  oldFrontendPath?: string;
}

const uiSections: UiSection[] = [
  {
    labelKey: 'header__menuItem__Top',
    route: ROUTE__TEST,
  },
  {
    labelKey: 'header__menuItem__About',
    oldFrontendPath: '/schdule',
  },
  {
    labelKey: 'header__menuItem__Specialization',
    oldFrontendPath: '/lib',
  },
  {
    labelKey: 'header__menuItem__Examples',
    oldFrontendPath: '/achiev',
  },
  {
    labelKey: 'header__menuItem__Contacts',
    oldFrontendPath: '/bonuses',
  },
];

const BG_COLOR = '#4a4a4a';
const FG_COLOR = '#fff';
const HOVER_BG_COLOR = '#5b5b5b';
const ACTIVE_BG_COLOR = '#393939';

export const appBarHeight = 50; // px
const fontFamily = 'Open Sans, sans-serif';
const fontSize = 14;
const fontWeight = 400;
const mobileMenuButtonWidth = 48;
const mobileMenuButtonHeight = 38;

const headerItemStyles = {
  backgroundColor: BG_COLOR,
  color: FG_COLOR,
  '&:hover': {
    backgroundColor: HOVER_BG_COLOR,
  },
  fontFamily,
  fontSize,
  fontWeight,
  minHeight: appBarHeight,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      minHeight: appBarHeight,
      backgroundColor: BG_COLOR,
    },
    uiSectionLink: {
      ...headerItemStyles,
    },
    langSelect: {
      ...headerItemStyles,
    },
    grow: {
      flexGrow: 1,
    },
    logo: {
      height: 40,
      // small decorative tweak
      marginTop: theme.spacing(1) * -1,
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    activeUiSectionLink: {
      backgroundColor: ACTIVE_BG_COLOR,
    },
    dropdownMenu: {
      '& .MuiPaper-root': {
        backgroundColor: BG_COLOR,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
    },
    mobileMenuButton: {
      color: '#fff',
      border: '1px solid #ddd',
      minWidth: mobileMenuButtonWidth,
      height: mobileMenuButtonHeight,
      '&:hover': {
        backgroundColor: HOVER_BG_COLOR,
      },
      '&:active': {
        backgroundColor: ACTIVE_BG_COLOR,
      },
    },
    userMenuButton: {
      marginLeft: theme.spacing(2),
    },
    menuDivider: {
      backgroundColor: FG_COLOR,
    },
    studentsLoadingIndicatorContainer: {
      width: '100%',
    },
  }),
);

const commonPropsToOpenMenuBelowAppBar = {
  // Open menu below the app bar
  // https://stackoverflow.com/a/52551100/286387
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom' as const,
    horizontal: 'right' as const,
  },
  // Change the menu's open position:
  // https://stackoverflow.com/a/68233427/286387
  keepMounted: false,
  // Paper transformations will be specific for each case
};

const Header: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const upLg = useMediaQueryPatched((appTheme: Theme) =>
    appTheme.breakpoints.up('lg'),
  );
  const upSm = useMediaQueryPatched((appTheme: Theme) =>
    appTheme.breakpoints.up('sm'),
  );

  // Collapsed menu for tablets and mobile
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuAnchorEl(null);
  }, []);

  const renderUiSectionLink = (section: UiSection, LinkComp: ComponentType) => {
    const { route, oldFrontendPath } = section;

    return (
      <LinkComp
        key={route || oldFrontendPath}
        // TODO improve typing
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component={route ? RouterLink : undefined}
        to={route || undefined}
        className={classNames(classes.uiSectionLink, {
          [classes.activeUiSectionLink]: route === location.pathname,
        })}
        onClick={oldFrontendPath ? () => {} : undefined}
      >
        {t(section.labelKey)}
      </LinkComp>
    );
  };

  const mobileMenuId = 'header-mobile-menu';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      id={mobileMenuId}
      {...commonPropsToOpenMenuBelowAppBar}
      PaperProps={{
        style: {
          // spacing(2 or 3) - the toolbar has padding at the right
          // Additional 1px Y gap is necessary to separate the button and menu
          transform: `translateX(${theme.spacing(upSm ? 3 : 2)}px) translateY(${
            (appBarHeight - mobileMenuButtonHeight) / 2 + 1
          }px)`,
        },
      }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.dropdownMenu}
    >
      {uiSections.map(section => renderUiSectionLink(section, MenuItem))}

      <Divider className={classes.menuDivider} />
    </Menu>
  );

  const appBar = (
    <AppBar position="sticky" color="inherit">
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <Link target="_blank" href={EXTERNAL_URL__HOME}>
          <img src={getLogoImg()} alt="logo" className={classes.logo} />
        </Link>

        {/* Growing empty placeholder */}
        <div className={classes.grow} />

        <Box mx={4}>
          <CurrentLanguageSelect className={classes.langSelect} />
        </Box>

        {/* Menu shown for desktop */}
        <div className={classes.sectionDesktop}>
          {uiSections.map(section => renderUiSectionLink(section, Button))}
        </div>

        {/* More button shown for small screens */}
        <div className={classes.sectionMobile}>
          <Button
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            className={classes.mobileMenuButton}
          >
            <MenuIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      {upLg ? appBar : <HideOnScrollDown>{appBar}</HideOnScrollDown>}
      {renderMobileMenu}
    </>
  );
};

export default memo(Header);
