import {styled, Grid, Icon, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {devices} from '../../../config/constants/devices';

export const SampleContainer = styled(Grid)({
  display: (props) => props.visible === 'true' ? 'block' : 'none',
});

export const SampleBox = styled(Box)({
  display: (props) => props.visible === 'true' ? 'flex' : 'none',
  width: '100%',
  justifyContent: 'center',
  marginTop: 50,
});

export const ArticlesListContainer = styled(Grid)({
  padding: '4rem 0',
});

export const HudTopBar = styled(Grid)({
  display: 'flex',
  maxHeight: 75,
  margin: '15px !important',
});

export const HudTopBarIcon = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 25,
});

export const HudTopBarSearch = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 20px',
  minHeight: '100px',
});

export const IconButton = styled(Icon)({
  marginRight: 5,
});

export const ArticleListContainer = styled(Grid)({
  minHeight: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ArticleBox = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  marginBottom: '20px',
  flexWrap: 'wrap',
  [devices.laptop]: {
    margin: '10px',
    padding: '20px',
    boxShadow: '0px 2px 4px #ccc',
  },
});

export const ArticleLogo = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ArticleContent = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: '10px 0',
  [devices.laptop]: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ArticleTitle = styled(Link)({
  textDecoration: 'underline',
  textTransform: 'uppercase',
  color: '#8a05be',
  [devices.laptop]: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px',
  },
});

export const ArticleBoostedIndicator = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [devices.laptop]: {
    alignItems: 'center',
  },
});

export const ArticleDetails = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  [devices.laptop]: {
    justifyContent: 'center',
  },
});

export const NoResultIcon = styled(Icon)({
  fontSize: '5rem',
  margin: '0 10px',
});
