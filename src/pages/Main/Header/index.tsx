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
  useScrollTrigger,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import MoreIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';

import CurrentLanguageSelect from 'src/components/Selects/CurrentLanguage';
import HideOnScrollDown from 'src/components/HideOnScrollDown';
import logo from 'src/assets/logo.png';
import useMediaQueryPatched from 'src/hooks/useMediaQueryPatched';
import {
  SECTION__ABOUT,
  SECTION__CONTACTS,
  SECTION__EXAMPLES,
  SECTION__SKILLS,
  SECTION__SPECIALIZATION,
  SECTION__PICTURE,
} from 'src/pages/Main/sectionIds';
import { COLOR__LIGHT_GREY } from 'src/theme';

interface UiSection {
  labelKey: string;
  sectionId: string;
}

const uiSections: UiSection[] = [
  {
    labelKey: 'header__menuItem__ToBeginning',
    sectionId: SECTION__PICTURE,
  },
  {
    labelKey: 'header__menuItem__About',
    sectionId: SECTION__ABOUT,
  },
  {
    labelKey: 'header__menuItem__Skills',
    sectionId: SECTION__SKILLS,
  },
  {
    labelKey: 'header__menuItem__Specialization',
    sectionId: SECTION__SPECIALIZATION,
  },
  {
    labelKey: 'header__menuItem__Examples',
    sectionId: SECTION__EXAMPLES,
  },
  {
    labelKey: 'header__menuItem__Contacts',
    sectionId: SECTION__CONTACTS,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: COLOR__LIGHT_GREY,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
    rootTransparent: {
      backgroundColor: 'transparent',
    },
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
    uiSectionButtons: {
      color: 'white',
    },
    activeUiSectionLink: {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  }),
);

interface Props {
  activeSectionIndex: number;
}

const Header: FC<Props> = ({ activeSectionIndex }) => {
  const classes = useStyles();
  const [t] = useTranslation();
  const upLg = useMediaQueryPatched((theme: Theme) =>
    theme.breakpoints.up('lg'),
  );
  const scrolledDown = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

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

  const handleSectionClick = (sectionId: string) => {
    // eslint-disable-next-line unicorn/prefer-query-selector
    const sectionElem = document.getElementById(sectionId);

    if (sectionElem) {
      sectionElem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const renderUiSectionLink = (section: UiSection, index: number) => {
    const { sectionId, labelKey } = section;

    return (
      <Button
        key={sectionId}
        onClick={() => handleSectionClick(sectionId)}
        className={classNames({
          [classes.uiSectionButtons]: !scrolledDown,
          [classes.activeUiSectionLink]: index === activeSectionIndex,
        })}
      >
        {t(labelKey)}
      </Button>
    );
  };

  const renderUiSectionLinkForMobileMenu = (
    section: UiSection,
    index: number,
  ) => {
    const { labelKey, sectionId } = section;

    return (
      <MenuItem
        key={sectionId}
        onClick={() => {
          handleSectionClick(sectionId);
          setTimeout(() => {
            handleMobileMenuClose();
          }, 500);
        }}
        className={classNames({
          [classes.activeUiSectionLink]: index === activeSectionIndex,
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
      {uiSections.map((section, index) =>
        renderUiSectionLinkForMobileMenu(section, index),
      )}
    </Menu>
  );

  const appBar = (
    <AppBar
      className={classNames(classes.root, {
        [classes.rootTransparent]: !scrolledDown,
      })}
    >
      <Toolbar>
        {/* Logo */}
        <img src={logo} alt="logo" className={classes.logo} />

        {/* Growing empty placeholder */}
        <div className={classes.grow} />

        <Box mx={4}>
          <CurrentLanguageSelect
            className={classNames({
              [classes.uiSectionButtons]: !scrolledDown,
            })}
          />
        </Box>

        {/* Menu shown for desktop */}
        <div className={classes.sectionDesktop}>
          {uiSections.map((section, index) =>
            renderUiSectionLink(section, index),
          )}
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
