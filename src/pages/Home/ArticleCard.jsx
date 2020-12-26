import React from 'react';
import {
  CardContent,
  Box,
  Typography,
  Divider,
} from '@material-ui/core';

import DefaultImg from '../../assets/img_not_found_768.png';

import {ArticleCardContainer} from './styles';
import {articleType} from '../../types';

const ArticleCard = (props) => {
  const {article} = props;

  return (
    <ArticleCardContainer variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <img
            src={article.logoImg || DefaultImg}
            height="150px"
            alt={article.title}
          />
        </Box>
        <Divider />
        <Typography variant="h5" component="h2">
          {article.title}
        </Typography>
        <Typography color="textSecondary">
          {article.theme && article.theme.description}
        </Typography>
        <Typography variant="body2" component="p" className="overflow-ellipsis">
          {article.description}
        </Typography>
      </CardContent>
    </ArticleCardContainer>
  );
};

ArticleCard.propTypes = {
  article: articleType.isRequired,
};

export default ArticleCard;
