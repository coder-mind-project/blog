import React from 'react';
import PropTypes from 'prop-types';

import {Box, Typography} from '@material-ui/core';

import {SampleContainer, NoResultIcon} from './styles';

const NoResultsFound = (props) => {
  const {visible} = props;

  return (
    <SampleContainer item xs={12} visible={visible.toString()}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        minHeight="300px"
        my={4}
        p={3}
      >
        <NoResultIcon color="primary">filter_alt</NoResultIcon>
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
