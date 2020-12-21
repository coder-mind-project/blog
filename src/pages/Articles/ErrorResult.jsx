import React from 'react';
import PropTypes from 'prop-types';

import {Box, Button, Icon} from '@material-ui/core';

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
      >
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="center"
          flexDirection="column"
          p={2}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              className="error-icon-area"
            >
              <Icon color="secondary" className="error-icon">healing</Icon>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <h2 className="message-error">
                Ops! ocorreu um erro ao buscar nossos artigos.
                Já tentou atualizar a página?
              </h2>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" mt={3}>
            <Button
              color="secondary"
              fullWidth
              variant="outlined"
              onClick={() => window.location.reload()}
            >
                Atualizar página
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" mt={3}>
            <Button
              color="secondary"
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
