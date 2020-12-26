import {styled, Card, Grid, Box} from '@material-ui/core';

import {devices} from '../../../config/constants/devices';

export const ArticleCardContainer = styled(Card)({
  'color': '#444',
  'fontWeight': 600,
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'space-between',
  'width': '250px',
  'height': '300px',
  '&:h3': {
    textDecoration: 'none',
  },
  'margin': 20,
});

export const BoostedArticleContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'end',
  flexWrap: 'wrap',
  padding: '1rem 2.5rem',
});

export const ArticlesContainer = styled(Box)({
  'paddingTop': '15vh',
  'paddingBottom': '2vh',
  'width': '100%',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'flex-start',
  'flexWrap': 'wrap',
  [devices.tablet]: {
    flexDirection: 'column-reverse',
  },
});
