import React from 'react';
import {Box, Divider, Tooltip, Typography} from '@material-ui/core';

import {
  faCommentDots,
  faShareAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import {ArticleFooterContainer, ArticleFooterIconButton} from './styles';

const ArticleFooter = () => {
  return (
    <Box>
      <ArticleFooterContainer item xs={12}>
        <Box p={3} width="100%">
          <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%" my={2}>
            <Box mr={2} ml={2}>
              <Tooltip title={(<Typography component="span" variant="body2">Em breve você poderá avaliar este artigo!</Typography>)}>
                <Box>
                  <ArticleFooterIconButton icon={faHeart} state="disabled" size="2x"/>
                </Box>
              </Tooltip>
            </Box>
            <Box mr={2} ml={2}>
              <Tooltip
                title={(<Typography component="span" variant="body2">Em breve você poderá compartilhar este artigo!</Typography>)}
                placement="top"
              >
                <Box>
                  <ArticleFooterIconButton icon={faShareAlt} state="disabled" size="2x"/>
                </Box>
              </Tooltip>
            </Box>
            <Box mr={2} ml={2}>
              <Tooltip title={(<Typography component="span" variant="body2">Em breve você realizar um comentário neste artigo</Typography>)}>
                <Box>
                  <ArticleFooterIconButton icon={faCommentDots} state="disabled" size="2x"/>
                </Box>
              </Tooltip>
            </Box>
          </Box>
          <Box width="100%" my={4}>
            <Divider />
          </Box>
        </Box>
      </ArticleFooterContainer>
    </Box>
  );
};

export default ArticleFooter;
