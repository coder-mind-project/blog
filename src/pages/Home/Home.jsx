import React, {useState} from 'react';
import {Box, Typography, Icon, makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';

import FloatingButton from '../../components/FloatingButton.jsx';

import BoostedArticles from './BoostedArticles';
import LatestArticles from './LatestArticles';
import {styles} from './styles/Home';


const useStyles = makeStyles(styles);

const Home = () => {
  const history = useHistory();

  const classes = useStyles();

  const [search, setSearch] = useState('');

  const searchArticles = () => {
    if (search) {
      history.push(`/artigos?q=${search}`);
    }
  };

  return (
    <Box>
      <Box className={classes.articlesGrid}>
        <LatestArticles />
        <BoostedArticles />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={3}
        mt={4}
        mb={4}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography component="span" variant="body1">
            Nada de interesse? Tente pesquisar aqui em baixo ...
          </Typography>
        </Box>
        <SearchBar
          value={search}
          onChange={setSearch}
          onRequestSearch={searchArticles}
          placeholder="O que vem em sua mente?"
          width="100%"
          className="search-input"
          searchIcon={
            (<Icon
              className="search-input-button"
              color="primary"
            >
                    search
            </Icon>)
          }
        />
      </Box>
      <FloatingButton action={() => window.scrollTo(0, 0)} />
    </Box>
  );
};

export default Home;
