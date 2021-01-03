import React from 'react';

import {Box} from '@material-ui/core';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import CustomDivider from '../../../components/Divider';

import {ArticleTextContentPlaceholder} from '../styles';

const ArticlePlaceholder = () => {
  return (
    <ArticleTextContentPlaceholder>
      <Box mb={4} width="100%" display="flex" alignItems="center" justifyContent="center">
        <ReactPlaceholder
          type='rect'
          style={{width: 200, height: 20}}
          showLoadingAnimation={true}
        />
      </Box>
      <Box width="100%" display="flex" flexDirection="column">
        <ReactPlaceholder
          type='text'
          rows={2}
          showLoadingAnimation={true}
        />
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" my={3}>
          <Box mx={3}>
            <ReactPlaceholder
              type='round'
              style={{width: 45, height: 45}}
              showLoadingAnimation={true}
            />
          </Box>
          <Box mx={1}>
            <ReactPlaceholder
              type='round'
              style={{width: 85, height: 20}}
              showLoadingAnimation={true}
            />
          </Box>
          <Box mx={1}>
            <ReactPlaceholder
              type='round'
              style={{width: 110, height: 20}}
              showLoadingAnimation={true}
            />
          </Box>
        </Box>
        <CustomDivider />
        <Box my={3}>
          <ReactPlaceholder
            type='text'
            rows={17}
            showLoadingAnimation={true}
          />
        </Box>
      </Box>
    </ArticleTextContentPlaceholder>
  );
};

export default ArticlePlaceholder;
