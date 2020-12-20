import React from 'react';
import PropTypes from 'prop-types';

import {Box, Divider} from '@material-ui/core';

const CustomDivider = (props) => {
  const {my} = props;
  return (
    <Box width="100%" my={my}>
      <Divider />
    </Box>
  );
};

CustomDivider.propTypes = {
  my: PropTypes.number,
};

CustomDivider.defaultProps = {
  my: 2,
};

export default CustomDivider;
