import React from 'react';
import {
  Box,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

import FloatingButton from '../../components/FloatingButton';
import Divider from '../../components/Divider';
import HomeSearch from './HomeSearch';
import BoostedArticles from './BoostedArticles';
import LatestArticles from './LatestArticles';

import {styles} from './styles/Home';


const useStyles = makeStyles(styles);

const Home = () => {
  const history = useHistory();
  const matches = useMediaQuery('(max-width: 768px)');
  const classes = useStyles();

  const searchArticles = (searchValue) => {
    if (searchValue) {
      history.push(`/artigos?q=${searchValue}`);
    }
  };

  return (
    <Box>
      <Box className={classes.articlesGrid}>
        <LatestArticles />
        {matches && <Divider />}
        {matches &&
          <Box width="100%">
            <HomeSearch onRequestSearch={searchArticles} />
          </Box>
        }
        {matches && <Divider />}
        <BoostedArticles />
      </Box>
      {!matches && <HomeSearch onRequestSearch={searchArticles} />}
      <FloatingButton action={() => window.scrollTo(0, 0)} />
    </Box>
  );
};

export default Home;
