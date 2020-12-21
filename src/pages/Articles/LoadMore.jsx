import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  CircularProgress,
  Button,
  Typography,
} from '@material-ui/core';

import {IconButton, SampleBox} from './styles';

const LoadMore = (props) => {
  const {isLoading, onLoad, visible} = props;
  return (
    <SampleBox visible={visible.toString()}>
      {!isLoading &&
        (
          <Box>
            <Button variant="outlined" color="primary" onClick={onLoad}>
              <Box display="flex" alignItems="center">
                <IconButton>search</IconButton>
                <Typography component="span" variant="body1">
                  Ver mais
                </Typography>
              </Box>
            </Button>
          </Box>
        )}
      {isLoading &&
        (
          <Box>
            <CircularProgress
              color="primary"
            />
          </Box>
        )}
    </SampleBox>
  );
};

LoadMore.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

LoadMore.defaultProps = {
  visible: false,
};

export default LoadMore;
