export const styles = () => ({
  articlesGrid: {
    'paddingTop': '15vh',
    'paddingBottom': '2vh',
    'width': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'flex-start',
    'flexWrap': 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
});

export default {styles};

