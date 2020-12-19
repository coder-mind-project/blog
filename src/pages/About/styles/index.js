import {styled, Button, Grid, Box} from '@material-ui/core';

export const Links = styled(Box)({
  margin: '40px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const ButtonLink = styled(Button)({
  margin: 10,
});

export const Container = styled(Grid)({
  padding: '15vh 10vw',
  minHeight: '100vh',
});

