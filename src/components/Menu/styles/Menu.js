import {COLORS} from '../../../config/constants/colors';
export const styles = () => ({
  menuLink: {
    'color': COLORS.secondary,
    'fontSize': '1.1rem',
    'fontWeight': 500,
    'textDecoration': 'none',
    'padding': 23,
    '&:hover': {
      backgroundColor: 'rgba(66, 39, 90, .2)',
    },
  },
  buttonLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  activeLink: {
    textDecoration: 'underline !important',
  },
});

export default {styles};
