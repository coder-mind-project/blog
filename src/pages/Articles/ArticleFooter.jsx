import React from 'react';
import {Box, Grid, Divider} from '@material-ui/core';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faShareAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const ArticleFooter = () => {
  return (
    <Box>
      <Grid item xs={12} className="article-footer">
        <Box p={3} width="100%">
          <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%" my={2}>
            <Box mr={2} ml={2}>
              <Box>
                <FontAwesomeIcon icon={faHeart} className="foot-button" color={'#8a05be'} size="2x"/>
              </Box>
            </Box>
            <Box mr={2} ml={2}>
              <Box>
                <FontAwesomeIcon icon={faShareAlt} className="foot-button" color="#8a05be" size="2x"/>
              </Box>
            </Box>
            <Box mr={2} ml={2}>
              <FontAwesomeIcon icon={faCommentDots} className="foot-button" color="#8a05be" size="2x"/>
            </Box>
          </Box>
          <Box width="100%" my={4}>
            <Divider />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ArticleFooter;
