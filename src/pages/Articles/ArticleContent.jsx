import React from 'react';
import {Box} from '@material-ui/core';

import {articleType} from '../../types';

import {ArticleImageHeaderContainer, ArticleTextContent} from './styles';

const ArticleContent = (props) => {
  const {article} = props;

  return (
    <Box m={4}>
      { article.headerImg &&
        <ArticleImageHeaderContainer>
          <img
            width="100%"
            src={`${article.headerImg}`}
            alt={article.description}
          />
        </ArticleImageHeaderContainer>
      }
      <ArticleTextContent>
        {article && article.content}
      </ArticleTextContent>
    </Box>
  );
};

ArticleContent.propTypes = {
  article: articleType.isRequired,
};

export default ArticleContent;
