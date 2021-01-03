import React from 'react';
import {Box} from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import {articleType} from '../../types';

import {ArticleImageHeaderContainer} from './styles';

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
      <ReactMarkdown>
        {article && article.content}
      </ReactMarkdown>
    </Box>
  );
};

ArticleContent.propTypes = {
  article: articleType.isRequired,
};

export default ArticleContent;
