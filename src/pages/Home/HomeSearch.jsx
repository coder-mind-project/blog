import React, {useState} from 'react';

import {Box, Typography, Icon} from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';

const HomeSearch = (props) => {
  const {
    searchLabel,
    searchIcon,
    onRequestSearch,
    searchInputPlaceholder,
  } = props;

  const [search, setSearch] = useState('');

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      mt={4}
      mb={4}
    >
      <Box display="flex" justifyContent="center" mb={2}>
        <Typography component="span" variant="body1">
          {searchLabel}
        </Typography>
      </Box>
      <SearchBar
        value={search}
        onChange={setSearch}
        onRequestSearch={onRequestSearch}
        placeholder={searchInputPlaceholder}
        width="100%"
        searchIcon={
          (<Icon
            color="primary"
          >
            {searchIcon}
          </Icon>)
        }
      />
    </Box>
  );
};

HomeSearch.propTypes = {
  searchLabel: PropTypes.string,
  searchIcon: PropTypes.string,
  searchInputPlaceholder: PropTypes.string,
  onRequestSearch: PropTypes.func,
};

HomeSearch.defaultProps = {
  searchLabel: 'Nada de interesse? Tente pesquisar aqui em baixo ...',
  searchIcon: 'search',
  searchInputPlaceholder: 'O que vem em sua mente?',
  onRequestSearch: () => null,
};

export default HomeSearch;
