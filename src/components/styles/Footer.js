export const styles = (theme) => ({
  footerContainer: {
    width: '100%',
    background: 'linear-gradient(to right, #8a05be, #42275a)',
    backgroundColor: '#8a05be',
    minHeight: 260,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footerContainerTop: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'start',
  },
  topicTitle: {
    color: '#fff',
    textDecoration: 'underline',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: '10px',
    fontWeight: 400,
  },
  iconArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  icon: {
    fontSize: '5rem',
    margin: '0 1rem',
  },
  iconDescription: {
    color: '#fff',
    width: '100%',
    justifyContent: 'center',
  },
  fakeLink: {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'color': '#fff',
    'marginTop': 2,
    'marginBottom': 2,
    'cursor': 'pointer',
    '&:hover': {
      color: 'rgba(255,255,255,.8)',
    },
  },
  footerText: {
    color: '#fff',
    fontWeight: 800,
  },
});

export default {styles};
