export const styles = (theme) => ({
  menu: {
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderBottom: '1px solid #42275a',
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: '1.3rem',
  },
  menuASideItems: {
    display: 'flex',
    alignItems: 'center',
  },
  menuASideItemsXs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
  },
  searchArea: {
    minWidth: '40%',
  },
  menuLogo: {
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonContent: {
    display: 'flex',
    alignItems: 'center',
  },
  menuTitle: {
    color: '#42275a',
    display: 'flex',
    fontWeight: 400,
    textDecoration: 'none',
  },
  iconButtonMenu: {
    marginRight: '10px',
    color: '#8a05be',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  drawerLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  menuLink: {
    'color': '#42275a',
    'fontSize': '1.1rem',
    'fontWeight': '500',
    'textDecoration': 'none',
    'padding': 23,
    '&:hover': {
      backgroundColor: 'rgba(66, 39, 90, .2)',
    },
  },
  activeLink: {
    textDecoration: 'underline !important',
  },
  buttonLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  drawer: {
    backgroundColor: 'transparent',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  drawerButton: {
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    fontSize: '1.5rem',
  },
  drawerFooter: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    background: 'linear-gradient(to right, #734b6d, #42275a)',
    backgroundColor: '#42275a',
    height: 100,
  },
  hide: {
    display: 'none',
  },
  fakeLink: {
    cursor: 'pointer',
  },
});

export default {styles};
