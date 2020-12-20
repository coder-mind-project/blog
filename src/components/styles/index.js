import {styled, Box, Icon, Fab} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import {devices} from '../../config/constants/devices';

export const CustomAlert = styled(Alert)({
  alignItems: 'center',
});

export const FooterContainer = styled(Box)({
  width: '100%',
  background: 'linear-gradient(to right, #8a05be, #42275a)',
  backgroundColor: '#8a05be',
  minHeight: 260,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const FooterBox = styled(Box)({
  width: '50%',
  [`${devices.laptop}`]: {
    width: '100%',
    margin: (props) => props.disablemargin === 'true' ? 0 : '2rem',
  },
});

export const FooterIconArea = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
});

export const FooterIconDescription = styled(Box)({
  color: '#fff',
  width: '100%',
  justifyContent: 'center',
});

export const FooterIcon = styled(Icon)({
  fontSize: '5rem',
  margin: '0 1rem',
});

export const CustomFloatingButton = styled(Fab)({
  position: 'fixed !important',
  zIndex: 1,
  left: '90%',
  top: '85%',
  overflow: 'hidden',
  backgroundColor: '#8a05be !important',
  color: '#fff !important',
  [devices.tablet]: {
    left: '85%',
  },
  [devices.mobileLarge]: {
    left: '75%',
  },
});
