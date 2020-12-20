import {styled, Box, Icon} from '@material-ui/core';
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

