import React from 'react';

import {Box, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTag, faTags, faStar} from '@fortawesome/free-solid-svg-icons';

import DefaultImg from '../../assets/img_not_found_512x512.png';
import Rating from 'react-rating';

import {articleType} from '../../types/article';

import {
  ArticleBox,
  ArticleLogo,
  ArticleContent,
  ArticleTitle,
  ArticleDetails,
  ArticleBoostedIndicator,
} from './styles';

const ArticleItem = (props) => {
  const {article} = props;

  return (
    <ArticleBox>
      <ArticleLogo item xs={12} md={3} lg={2}>
        <figure>
          <img
            src={article.logoImg || DefaultImg}
            height={120}
            alt={article.title}
          />
        </figure>
      </ArticleLogo>
      <ArticleContent
        item
        xs={12}
        md={8}
      >
        <Box>
          <Typography component="h2" variant="h4">
            <ArticleTitle to={`/artigos/${article.uri}`}>
              {article.title}
            </ArticleTitle>
          </Typography>
          { article.boosted &&
            <ArticleBoostedIndicator>
              <Typography component="span" variant="body1">
                Assuntos do momento
              </Typography>
              <Rating
                placeholderRating={5}
                readonly
                placeholderSymbol={
                  (<FontAwesomeIcon icon={faStar} color="yellow" />)
                }
                emptySymbol={(<FontAwesomeIcon icon={faStar} color="gray" />)}
              />
            </ArticleBoostedIndicator>
          }
          <Box my={3}>
            <Typography
              component="p"
              variant="body1"
            >
              {article.description}
            </Typography>
          </Box>
        </Box>
        <ArticleDetails>
          {article.theme.description &&
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <FontAwesomeIcon icon={faTag} />
              </Box>
              {article.theme.description}
            </Box>
          }
          { article.category.description &&
            <Box display="flex" flexWrap="wrap" ml={2} alignItems="center">
              <Box mr={1}>
                <FontAwesomeIcon icon={faTags} />
              </Box>
              {article.category.description}
            </Box>
          }
        </ArticleDetails>
      </ArticleContent>
    </ArticleBox>
  );
};

ArticleItem.propTypes = {
  article: articleType.isRequired,
};

export default ArticleItem;
