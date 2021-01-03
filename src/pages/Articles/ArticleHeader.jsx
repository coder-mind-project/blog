import React from 'react';
import {Box, Typography, Divider} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Avatar from 'react-avatar';

import {faTag, faTags} from '@fortawesome/free-solid-svg-icons';

import {articleType} from '../../types';

import {ArticleHudHeader, ArticleTitleArea, ArticleDescriptionArea} from './styles';

const ArticleHeader = (props) => {
  const {article} = props;
  return (
    <ArticleHudHeader>
      <Box>
        <ArticleTitleArea>
          <Typography component="h1" variant="h3">{article.title}</Typography>
        </ArticleTitleArea>
        <ArticleDescriptionArea>
          <Typography component="h2" variant="h5">{article.description}</Typography>
        </ArticleDescriptionArea>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mx={1} width="100%">
        <Box mr={1} display="flex" alignItems="center">
          <Avatar
            src={`${article.author && article.author.profilePhoto}`}
            name={article.author && article.author.name}
            size={50}
            round={true}
          />
        </Box>
        {article.theme && article.theme.description &&
          <Box display="flex" alignItems="center" justifyContent="center" mx={2}>
            <Box mr={1}>
              <FontAwesomeIcon icon={faTag} size="lg" color="#444" />
            </Box>
            <Typography component="span" variant="body1">{article.theme.description}</Typography>
          </Box>
        }
        {article.category && article.category.description &&
          <Box display="flex" alignItems="center" justifyContent="center" mx={2}>
            <Box mr={1}>
              <FontAwesomeIcon icon={faTags} size="lg" color="#444" />
            </Box>
            <Typography component="span" variant="body1">{article.category.description}</Typography>
          </Box>
        }
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%">
        <Typography component="span" variant="body1">Publicado em: {`${article.publishedAt && article.publishedAt.toLocaleDateString()}`}</Typography>
      </Box>
      <Box width="100%" mt={3} mb={1}>
        <Divider/>
      </Box>
    </ArticleHudHeader>
  );
};

ArticleHeader.propTypes = {
  article: articleType.isRequired,
};

export default ArticleHeader;
