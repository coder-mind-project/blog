import React from 'react';
import PropTypes from 'prop-types';

import {Box} from '@material-ui/core';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const ArticleCardPlaceholder = (props) => {
  const {rectHeight, rectWidth} = props;

  return (
    <Box m={2}>
      <ReactPlaceholder
        type='rect'
        style={{width: rectWidth, height: rectHeight}}
        showLoadingAnimation={true}
      />
      <Box width="100%" mb={2} mt={2}></Box>
      <ReactPlaceholder
        type='text'
        rows={2}
        showLoadingAnimation={true}
      />
    </Box>
  );
};

ArticleCardPlaceholder.propTypes = {
  rectHeight: PropTypes.number,
  rectWidth: PropTypes.number,
};

ArticleCardPlaceholder.defaultProps = {
  rectHeight: 175,
  rectWidth: 175,
};

export default ArticleCardPlaceholder;
