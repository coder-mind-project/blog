import {styled, Card, Grid} from '@material-ui/core';

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
