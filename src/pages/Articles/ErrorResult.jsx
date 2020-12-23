import React from 'react';
import PropTypes from 'prop-types';

import {Box, Button, Icon, Typography} from '@material-ui/core';

import {SampleContainer} from './styles';

const ErrorResult = (props) => {
  const {visible} = props;

  return (
    <SampleContainer item xs={12} visible={visible.toString()}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="450px"
      >
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="center"
          flexDirection="column"
          m={2}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              className="error-icon-area"
            >
              <Icon color="primary" className="error-icon">healing</Icon>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography component="h2" variant="h4">
                Ops! ocorreu um erro ao buscar nossos artigos.
                Já tentou atualizar a página?
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" mt={3}>
            <Button
              color="primary"
              fullWidth
              variant="outlined"
              onClick={() => window.location.reload()}
            >
                Atualizar página
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" mt={3}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => window.location.href = '/sobre#contact'}
            >
                Reportar bug
            </Button>
          </Box>
        </Box>
      </Box>
    </SampleContainer>
  );
};

ErrorResult.propTypes = {
  visible: PropTypes.bool,
};

ErrorResult.defaultProp = {
  visible: false,
};

export default ErrorResult;
