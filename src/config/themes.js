import {createMuiTheme} from '@material-ui/core';
import {COLORS} from '../config/constants/colors';

/**
 * The standard style for application
 * @param {'light' | 'dark'} theme
 *  Sets the default theme, allowed: 'dark' and 'light'
 *
 * @return {Theme} Result from createMuiTheme Method
 */
export function standard(theme) {
  return createMuiTheme({
    palette: {
      type: theme || 'light',
      primary: {
        main: COLORS.primary,
      },
      secondary: {
        main: COLORS.secondary,
      },
      action: {
        disabled: 'rgb(0,0,0)',
        disabledBackground: 'rgb(190,190,190)',
      },
    },
    typography: {
      fontFamily: [
        'Darker Grotesque',
        'sans-serif',
      ].join(','),
    },
    overrides: {
      MuiFormLabel: {
        root: {
          '&$focused': {
            color: theme === 'dark' ?
              'rgba(255,255,255, .7) !important' :
              'auto',
          },
        },
      },
      MuiContainer: {
        root: {
          maxWidth: '100% !important',
        },
      },
    },
  });
}

export default {standard};
