import React from 'react';
import PropTypes from 'prop-types';

import {Box, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

import {SampleContainer} from './styles';

const NoResultsFound = (props) => {
  const {visible} = props;

  return (
    <SampleContainer item xs={12} visible={visible.toString()}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        my={4}
        p={3}
      >
        <FontAwesomeIcon
          icon={faFilter}
          size="5x"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="h3"
            variant="h4"
          >
            Ops! parece que não conseguimos encontrar nenhum resultado
          </Typography>
          <Typography
            component="p"
            variant="body1"
          >
            Que tal realizar outra busca?
          </Typography>
        </Box>
      </Box>
    </SampleContainer>
  );
};

NoResultsFound.propTypes = {
  visible: PropTypes.bool,
};

NoResultsFound.defaultProps = {
  visible: false,
};

export default NoResultsFound;
