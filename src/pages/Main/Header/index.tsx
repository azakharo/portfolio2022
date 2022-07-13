import React, { FC, memo } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MoreIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';

import { COLOR__LIGHT_GREY } from 'src/theme';
import CurrentLanguageSelect from 'src/components/Selects/CurrentLanguage';
import HideOnScrollDown from 'src/components/HideOnScrollDown';
import logo from 'src/assets/logo.png';
import { ROUTE__TEST } from '../../../routes/routes';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    logo: {
      height: 48,
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
      backgroundColor: COLOR__LIGHT_GREY,
    },
  }),
);

const Header: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const location = useLocation();
  const upLg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  // Collapsed menu for tablets and mobile
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const renderUiSectionLink = (section: UiSection) => {
    const { route, oldFrontendPath, labelKey } = section;

    return (
      <Button
        key={route || oldFrontendPath}
        // TODO improve typing
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component={route ? RouterLink : undefined}
        to={route || undefined}
        className={classNames({
          [classes.activeUiSectionLink]: route === location.pathname,
        })}
      >
        {t(labelKey)}
      </Button>
    );
  };

  const renderUiSectionLinkForMobileMenu = (section: UiSection) => {
    const { labelKey, route, oldFrontendPath } = section;

    return (
      <MenuItem
        key={route || oldFrontendPath}
        // TODO improve typing
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component={route ? RouterLink : undefined}
        to={route || undefined}
        className={classNames({
          [classes.activeUiSectionLink]: route === location.pathname,
        })}
      >
        {t(labelKey)}
      </MenuItem>
    );
  };

  const mobileMenuId = 'header-mobile-menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {uiSections.map(section => renderUiSectionLinkForMobileMenu(section))}
    </Menu>
  );

  const appBar = (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        {/* Logo */}
        <img src={logo} alt="logo" className={classes.logo} />

        {/* Growing empty placeholder */}
        <div className={classes.grow} />

        <Box mx={4}>
          <CurrentLanguageSelect />
        </Box>

        {/* Menu shown for desktop */}
        <div className={classes.sectionDesktop}>
          {uiSections.map(section => renderUiSectionLink(section))}
        </div>

        {/* More button shown for small screens */}
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
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
