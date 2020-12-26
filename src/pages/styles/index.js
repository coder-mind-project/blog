import {Grid, styled, Icon, Box} from '@material-ui/core';

import {devices} from '../../config/constants/devices';

export const Container = styled(Grid)({
  padding: '15vh 10vw',
  minHeight: '100vh',
});

export const NotFoundContainer = styled(Grid)({
  padding: '15vh 10vw',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const NotFoundIcon = styled(Icon)({
  fontSize: '5rem',
  margin: '0 10px',
});

export const NotFoundContent = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [devices.mobileExtraLarge]: {
    flexDirection: 'column',
  },
});
