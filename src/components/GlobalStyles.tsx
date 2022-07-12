import { createStyles, makeStyles } from '@material-ui/core';
import { mainFontFamily } from 'src/theme/typography';

const useStyles = makeStyles(
  theme =>
    createStyles({
      '@global': {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          width: '100%',
          fontFamily: `${mainFontFamily}, sans-serif`,
        },
        body: {
          width: '100%',
        },
        '.boxShadowNone': {
          boxShadow: 'none',
        },
        // Mui card header by default adds some padding/margin which incompatible
        // with out design
        '.resetCardHeader': {
          padding: 0,

          '@global .MuiCardHeader-action': {
            alignSelf: 'center',
            padding: 0,
            margin: 0,
          },
        },
        '.boxShadowedCard': {
          [theme.breakpoints.up('md')]: {
            boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.08)',
            borderRadius: 10,
          },
          [theme.breakpoints.down('sm')]: {
            boxShadow: 'none',
          },
        },
        // Customize dialogs
        '.MuiDialogActions-root': {
          '&> button:not(:last-child)': {
            marginRight: theme.spacing(3),
          },
        },
        // react-material-ui-carousel
        // Override the navi button's arrow direction for RTL languages
        '.improvedCarousel-naviButton': {
          '& .MuiSvgIcon-root': {
            transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
          },
        },
      },
    }),
  {
    // IMPORTANT!
    // The following forces the build to place the <style> tag with the styles
    // specified above below other <style> tags in the document.
    // So, the styles shown above are applied last (override other styles).
    // https://stackoverflow.com/questions/49180192/how-to-specify-the-order-in-which-the-style-sheets-appear-in-the-document
    index: 1,
  },
);

const GlobalStyles = (): null => {
  useStyles();

  return null;
};

export default GlobalStyles;
