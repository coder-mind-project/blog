import React from 'react';

import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import CustomDivider from '../../../components/Divider';

const ArticleItemPlaceholder = (props) => {
  const {roundSize} = props;

  return (
    <Box display="flex" m={2}>
      <Box my={2} mx={4}>
        <ReactPlaceholder
          type='round'
          style={{width: roundSize, height: roundSize}}
          showLoadingAnimation={true}
        />
      </Box>
      <Box width="100%" display="flex" flexDirection="column">
        <ReactPlaceholder
          type='textRow'
          showLoadingAnimation={true}
        />
        <CustomDivider />
        <ReactPlaceholder
          type='text'
          rows={3}
          showLoadingAnimation={true}
        />
      </Box>
    </Box>
  );
};

ArticleItemPlaceholder.propTypes = {
  roundSize: PropTypes.number,
};

ArticleItemPlaceholder.defaultProps = {
  roundSize: 150,
};


export default ArticleItemPlaceholder;
